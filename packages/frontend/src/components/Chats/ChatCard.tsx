import React from "react";
import { Card, CardContent, Typography, Avatar } from "@mui/material";
import { Link } from "react-router-dom";

interface ChatCardProps {
  chat: {
    id: number;
    person: string;
    messages: { sender: string; time: string; content: string }[];
  };
}

const ChatCard: React.FC<ChatCardProps> = ({ chat }) => {
  return (
    <Card
      sx={{
        mb: 2,
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        color: "inherit",
        transition: "transform 0.3s ease, background-color 0.3s ease",
        "&:hover": {
          transform: "scale(1.02)",
          backgroundColor: "rgba(0, 0, 0, 0.04)",
        },
      }}
      component={Link}
      to={`/chats/${chat.id}`}
    >
      <Avatar sx={{ margin: 1 }}>{chat.person[0]}</Avatar>
      <CardContent>
        <Typography variant="h6">{chat.person}</Typography>
        <Typography variant="body2" color="textSecondary">
          {chat.messages[chat.messages.length - 1].content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ChatCard;
