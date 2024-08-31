import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaEllipsisV } from "react-icons/fa";
import { Typography, Box, IconButton, Avatar } from "@mui/material";

// Define the props interface
interface ChatHeaderProps {
  person: string;
  profilePicture?: string; // Profile picture is optional
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ person, profilePicture }) => {
  return (
    <Box
      component="header"
      sx={{
        position: "fixed",
        top: "54px", // Adjust this value based on the height of your top navigation bar
        left: 0,
        right: 0,
        padding: "12px 16px",
        backgroundColor: "#fff",
        zIndex: 999,
        borderBottom: "1px solid #ddd",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between", // Ensures proper alignment of elements
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Link
          to="/chats"
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton
            sx={{ color: "inherit", padding: 0, marginRight: 2 }} // Increased margin to move away from edge
          >
            <FaArrowLeft />
          </IconButton>
        </Link>
        <Link
          to="/profile"
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar
            src={profilePicture}
            sx={{ width: 40, height: 40, marginRight: 1 }} // Profile picture styling
          >
            {profilePicture ? null : person[0]}{" "}
            {/* Display first letter of the name if no profile picture */}
          </Avatar>
          <Typography variant="h6">{person}</Typography>
        </Link>
      </Box>
      <IconButton edge="end" sx={{ color: "inherit" }}>
        <FaEllipsisV />
      </IconButton>
    </Box>
  );
};

export default ChatHeader;
