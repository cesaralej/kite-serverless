import { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { loadUsers } from "../../api/users";
import { fetchMessages } from "../../api/messages";
import { useWebSocket } from "../../hooks/useWebSocket";
import WebSocketControls from "./WebSocketControls";
import UserList from "./UserList";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";
import { User } from "../../types/User";
import { Message } from "../../types/Message";

const filterMessages = (
  receivedMessages: Message[],
  userId: string,
  currentUserName: string | null
) => {
  return receivedMessages.filter(
    (msg) =>
      (msg.userId === userId && msg.toUserId === currentUserName) || // Messages from selected user to current user
      (msg.toUserId === userId && msg.userId === currentUserName) // Messages from current user to selected user
  );
};

const WebSocketTest = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState<string | null>(null);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [selectedUserConn, setSelectedUserConn] = useState<string | null>(null);
  const [customMessage, setCustomMessage] = useState("");
  const [receivedMessages, setReceivedMessages] = useState<Message[]>([]);
  const [filteredMessages, setFilteredMessages] = useState<Message[]>([]); // New state for filtered messages

  const onMessageReceived = (message: string, type: string) => {
    console.log("Received message");
    //console.log("Received message:", typeof message);
    const data = JSON.parse(message);
    //console.log("Parsed data:", data);
    const receivedMessage: Message = {
      userId: data.userId, // Add appropriate value
      toUserId: data.toUserId, // Add appropriate value
      content: data.content, // Assuming content is the same as text
      createdAt: data.createdAt, // Add appropriate value
      messageId: data.messageId, // Add appropriate value
      connectionId: "", // Add appropriate value
      toConnectionId: "", // Add appropriate value
    };

    setReceivedMessages((prevMessages) => [...prevMessages, receivedMessage]);
    if (type === "userConnected" || type === "userDisconnected") {
      loadUsers().then(setUsers);
    }
  };

  const onConnectionStatusChange = (status: string) => {
    if (status === "Connected" || status === "Disconnected") {
      loadUsers().then(setUsers);
    }
    console.log("Connection status changed:", status);
  };

  const {
    connectWebSocket,
    disconnectWebSocket,
    sendMessage,
    connectionStatus,
  } = useWebSocket(onMessageReceived, onConnectionStatusChange);

  const loadInitialData = async () => {
    setIsLoading(true);
    const [messages, users] = await Promise.all([fetchMessages(), loadUsers()]);
    setReceivedMessages(messages);
    setUsers(users);
    setIsLoading(false);
    try {
      const user = await Auth.currentAuthenticatedUser();
      const userName = user.attributes["name"];
      setName(userName);
    } catch (error) {
      console.error("Error fetching user attributes:", error);
    }
  };

  useEffect(() => {
    loadInitialData();
  }, []);

  useEffect(() => {
    if (selectedUserId) {
      setFilteredMessages(
        filterMessages(receivedMessages, selectedUserId, name)
      );
    }
  }, [receivedMessages, selectedUserId, name]);

  const handleSelect = (userId: string, userConn: string) => {
    setSelectedUserId(userId);
    setSelectedUserConn(userConn);
    console.log("Handle select:", userId, userConn);
  };

  const handleSendMessage = () => {
    console.log("Handle send message to:", selectedUserId, selectedUserConn);
    if (selectedUserId && selectedUserConn && customMessage) {
      const sentMessage: Message = {
        content: customMessage,
        userId: name || "", // Add appropriate value
        toUserId: selectedUserId, // Add appropriate value
        createdAt: new Date().toISOString(),
        messageId: "", // Add appropriate value
        connectionId: "", // Add appropriate value
        toConnectionId: selectedUserConn,
      };
      try {
        sendMessage(
          "sendMessage",
          customMessage,
          selectedUserId,
          selectedUserConn
        );
      } catch (error) {
        console.error("Error sending message:", error);
      }
      setReceivedMessages((prevMessages) => [...prevMessages, sentMessage]);
      setCustomMessage("");
    }
  };

  const handleRefreshUsers = async () => {
    console.log("Handle refresh users");
    setIsLoading(true); // Show loading spinner while fetching
    const updatedUsers = await loadUsers();
    const updatedMessages = await fetchMessages();
    setReceivedMessages(updatedMessages);
    setUsers(updatedUsers);
    setIsLoading(false); // Hide loading spinner after fetching
  };

  return (
    <>
      <WebSocketControls
        connectionStatus={connectionStatus}
        connectWebSocket={connectWebSocket}
        disconnectWebSocket={disconnectWebSocket}
        handleRefreshUsers={handleRefreshUsers}
        isLoading={isLoading}
      />
      <UserList
        users={users}
        selectedUserId={selectedUserId}
        handleSelect={handleSelect}
        isLoading={isLoading}
      />

      <MessageInput
        customMessage={customMessage}
        setCustomMessage={setCustomMessage}
        handleSendMessage={handleSendMessage}
      />
      <MessageList
        receivedMessages={filteredMessages}
        currentUser={name || ""}
      />
    </>
  );
};

export default WebSocketTest;
