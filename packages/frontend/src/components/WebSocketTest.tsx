import { useState, useEffect } from "react";
import { loadUsers } from "../api/users";
import { useWebSocket } from "../hooks/useWebSocket";
import Spinner from "./Spinner";

const WebSocketTest = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<
    { connectionId: string; userId: string }[]
  >([]);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [customMessage, setCustomMessage] = useState("");
  const [receivedMessages, setReceivedMessages] = useState<string[]>([]);

  const onMessageReceived = (message: string) => {
    const receivedData = JSON.parse(message);
    setReceivedMessages((prevMessages) => [...prevMessages, message]);
    if (
      receivedData.type === "userConnected" ||
      receivedData.type === "userDisconnected"
    ) {
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
    });
  }, []);

  const handleSelect = (userId: string) => {
    setSelectedUserId(userId);
    console.log("Selected user:", userId);
  };

  const handleSendMessage = () => {
    if (selectedUserId) {
      sendMessage("sendMessage", customMessage, selectedUserId);
    }
  };

  return (
    <div style={{ marginBottom: "50px" }}>
      <h1>WebSocket Test</h1>
      <p>Status: {connectionStatus}</p>
      <button onClick={connectWebSocket}>Connect</button>
      <button onClick={disconnectWebSocket}>Disconnect</button>
      <h2>Connected Users</h2>
      {isLoading ? (
        <div style={{ margin: "20px 0" }}>
          <Spinner loading={true} />
        </div>
      ) : (
        <ul>
          {users.map((user) => (
            <li
              key={user.connectionId}
              style={{
                cursor: "pointer",
                backgroundColor:
                  selectedUserId === user.userId ? "#d3d3d3" : "white",
                padding: "10px",
                border: "1px solid #ccc",
                marginBottom: "5px",
              }}
              onClick={() => handleSelect(user.connectionId)}
            >
              {user.connectionId} (ID: {user.userId})
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
            <p key={index} style={{ margin: 0 }}>
              {msg}
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
