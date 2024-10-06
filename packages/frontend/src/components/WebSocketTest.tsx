import { useState, useEffect } from "react";
import { loadUsers } from "../api/users";
import { useWebSocket } from "../hooks/useWebSocket";
import Spinner from "./Spinner";

interface User {
  connectionId: string; // ID of the WebSocket connection
  userId: string; // Unique user ID
  email: string; // User's email address
  name: string; // User's name
  profilePicture?: string; // Optional profile picture URL
  role: string; // User's role
  department: string; // User's department
  onlineStatus: boolean; // User's online status
  lastSeen?: number; // Timestamp of when the user was last seen
  unreadMessageCount: number; // Number of unread messages
  conversations: string[]; // List of conversation IDs
}

const WebSocketTest = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [customMessage, setCustomMessage] = useState("");
  const [receivedMessages, setReceivedMessages] = useState<
    { text: string; isSent: boolean }[]
  >([]);

  const onMessageReceived = (message: string, type: string) => {
    console.log("Received message:", message);
    const receivedMessage = {
      text: message, // The message content from the WebSocket
      isSent: false, // Flag indicating it's a received message
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

  useEffect(() => {
    loadUsers().then((users) => {
      setUsers(users);
      setIsLoading(false);
      console.log("Users loaded:", users);
    });
  }, []);

  const handleSelect = (userId: string) => {
    setSelectedUserId(userId);
    console.log("Selected user:", userId);
  };

  const handleSendMessage = () => {
    if (selectedUserId) {
      const sentMessage = {
        text: customMessage,
        userId: selectedUserId, // The recipient's user ID
        isSent: true, // Indicate that this is a sent message
      };
      sendMessage("sendMessage", customMessage, selectedUserId);
      setReceivedMessages((prevMessages) => [...prevMessages, sentMessage]);
      setCustomMessage("");
    }
  };

  const handleRefreshUsers = async () => {
    setIsLoading(true); // Show loading spinner while fetching
    const updatedUsers = await loadUsers();
    setUsers(updatedUsers);
    setIsLoading(false); // Hide loading spinner after fetching
  };

  const listStyle = {
    listStyleType: "none", // Remove default list styles
    padding: 0, // Remove default padding
  };

  const userItemStyle = {
    cursor: "pointer",
    padding: "10px",
    border: "1px solid #ccc",
    marginBottom: "5px",
    transition: "background-color 0.3s", // Smooth transition effect
  };

  const getBackgroundColor = (connectionId: string) =>
    selectedUserId === connectionId ? "#d3d3d3" : "white";

  return (
    <div style={{ marginBottom: "50px" }}>
      <h1>WebSocket Test</h1>
      <p>Status: {connectionStatus}</p>
      <button onClick={connectWebSocket}>Connect</button>
      <button onClick={disconnectWebSocket}>Disconnect</button>
      <h2>Connected Users</h2>
      <button onClick={handleRefreshUsers}>Refresh Users</button>
      {isLoading ? (
        <div style={{ margin: "20px 0" }}>
          <Spinner loading={true} />
        </div>
      ) : (
        <ul style={listStyle}>
          {users.map((user) => (
            <li
              key={user.userId}
              style={{
                ...userItemStyle,
                backgroundColor: getBackgroundColor(user.userId),
              }}
              onClick={() => handleSelect(user.userId)}
            >
              {user.userId} (Online: {user.onlineStatus ? "Yes" : "No"})
            </li>
          ))}
        </ul>
      )}
      <input
        type="text"
        value={customMessage}
        onChange={(e) => setCustomMessage(e.target.value)}
        placeholder="Enter your message"
        style={{ marginRight: "10px" }}
      />
      <button onClick={handleSendMessage}>Send Message</button>
      <h2>Received Messages</h2>
      <div
        style={{
          marginTop: "20px",
          padding: "10px",
          border: "1px solid #ccc",
          height: "200px",
          overflowY: "auto",
        }}
      >
        {receivedMessages.length > 0 ? (
          receivedMessages.map((msg, index) => (
            <p
              key={index}
              style={{
                margin: 0,
                textAlign: msg.isSent ? "right" : "left", // Align sent messages to the right
                backgroundColor: msg.isSent ? "#daf8e3" : "#f1f1f1", // Different background color
                padding: "5px",
                borderRadius: "5px",
              }}
            >
              {msg.text}
            </p>
          ))
        ) : (
          <p>No messages received yet.</p>
        )}
      </div>
    </div>
  );
};

export default WebSocketTest;
