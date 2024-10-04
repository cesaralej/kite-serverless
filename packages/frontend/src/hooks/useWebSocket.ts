// useWebSocket.ts
import { useState } from "react";
import { Auth } from "aws-amplify";
import config from "../config.ts";

export const useWebSocket = (
  onMessageReceived: (message: string, type: string) => void,
  onConnectionStatusChange: (status: string) => void
) => {
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [connectionStatus, setConnectionStatus] = useState("Not connected");

  const connectWebSocket = async () => {
    const credentials = await Auth.currentAuthenticatedUser();
    const name = credentials.attributes["name"];

    // TODO: Replace the WebSocket URL with a dynamic one
    const websocket = new WebSocket(
      `${config.WebSocketAPI.URL}?identityId=${name}`
    );

    websocket.onopen = () => {
      setConnectionStatus("Connected");
      onConnectionStatusChange("Connected");
    };

    websocket.onerror = (error) => {
      setConnectionStatus("Error");
      onConnectionStatusChange("Error");
      console.error("WebSocket error", error);
    };

    websocket.onmessage = (message) => {
      //console.log("Received onmessage:", message);
      onMessageReceived(message.data, message.type);
    };

    websocket.onclose = () => {
      setConnectionStatus("Disconnected");
      onConnectionStatusChange("Disconnected");
    };

    setWs(websocket);
  };

  const disconnectWebSocket = () => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.close();
    }
  };

  const sendMessage = (action: string, message: string, userId: string) => {
    console.log("Sending message:", message);
    if (ws && ws.readyState === WebSocket.OPEN) {
      const msg = {
        action,
        data: { message, userId },
      };
      console.log("Sending data:", msg);
      ws.send(JSON.stringify(msg));
    }
  };

  return {
    connectWebSocket,
    disconnectWebSocket,
    sendMessage,
    connectionStatus,
  };
};
