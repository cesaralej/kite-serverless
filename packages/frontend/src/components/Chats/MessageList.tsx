import React, { useEffect, useRef } from "react";
import { Box, List, ListItem } from "@mui/material";
import MessageCard from "./MessageCard"; // Import the MessageCard component
import { Message } from "../../types";

// Define the type for the props
interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto scroll to the bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <Box
      sx={{
        position: "relative",
        paddingTop: "50px",
        paddingBottom: "50px",
        height: "100%",
        overflowY: "auto", // Makes the Box scrollable
      }}
    >
      <List sx={{ paddingBottom: 2 }}>
        {messages.map((message, index) => (
          <ListItem
            key={index}
            sx={{
              display: "flex",
              justifyContent:
                message.sender === "You" ? "flex-end" : "flex-start",
              padding: 0,
              marginBottom: 1.5,
            }}
          >
            <MessageCard
              sender={message.sender}
              content={message.content}
              timestamp={message.time}
              isRead={true} // Assuming all messages are read for this example
            />
          </ListItem>
        ))}
        <div ref={messagesEndRef} />{" "}
        {/* Invisible element to scroll into view */}
      </List>
    </Box>
  );
};

export default MessageList;
