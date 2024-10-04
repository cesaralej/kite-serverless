// useWebSocket.ts
import { useState } from "react";
import { Auth } from "aws-amplify";

export const useWebSocket = (
  onMessageReceived: (message: string) => void,
  onConnectionStatusChange: (status: string) => void
) => {
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [connectionStatus, setConnectionStatus] = useState("Not connected");

  const connectWebSocket = async () => {
    const credentials = await Auth.currentCredentials();
    const identityId = credentials.identityId;

    // TODO: Replace the WebSocket URL with a dynamic one
    const websocket = new WebSocket(
      `wss://0ck7r5veaj.execute-api.us-east-1.amazonaws.com/$default?identityId=${identityId}`
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
      onMessageReceived(message.data);
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
    if (ws && ws.readyState === WebSocket.OPEN) {
      const msg = {
        action,
        data: { message, userId },
      };
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
