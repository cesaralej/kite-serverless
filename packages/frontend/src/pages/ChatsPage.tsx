import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Chip,
  Grid,
  Menu,
  MenuItem,
  Fab,
} from "@mui/material";
import { FaPlus } from "react-icons/fa";
import ChatCard from "../components/Chats/ChatCard";
import Spinner from "../components/Spinner";
import Search from "../components/Search";
import mock from "../chats.json";

const ChatsPage: React.FC = () => {
  const navigate = useNavigate();
  // State for chat data
  const [chats, setChats] = useState<
    {
      id: number;
      person: string;
      messages: { sender: string; time: string; content: string }[];
    }[]
  >([]);
  const [loadingChats, setLoadingChats] = useState(true);

  // State for menu (FAB options)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  useEffect(() => {
    // Simulate fetching chat data
    setTimeout(() => {
      setChats(mock.mock);
      setLoadingChats(false);
    }, 1000);
  }, []);

  if (loadingChats) {
    return <Spinner loading={true} />;
  }

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleFabClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNewChat = () => {
    console.log("New Chat");
    handleMenuClose();
    // Navigate to the directory to select who to start a chat with
    navigate("/directory");
  };

  const handleNewGroupChat = () => {
    console.log("New Group Chat");
    handleMenuClose();
    // Navigate to the directory to select who to start a group chat with
  };

  return (
    <Box sx={{ position: "relative", height: "100vh", paddingBottom: "80px" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Chats
      </Typography>

      {/* Search Bar */}
      <Search />

      {/* Filtering Labels */}
      <Box sx={{ display: "flex", justifyContent: "space-around", my: 2 }}>
        <Chip label="All" onClick={handleClick} />
        <Chip label="Unread" variant="outlined" onClick={handleClick} />
        <Chip label="Starred" variant="outlined" onClick={handleClick} />
        <Chip label="Archived" variant="outlined" onClick={handleClick} />
        <Chip label="Marketing" variant="outlined" onClick={handleClick} />
      </Box>

      {/* Chat Cards */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {chats && chats.length > 0 ? (
            chats.map((chat) => <ChatCard key={chat.id} chat={chat} />)
          ) : (
            <Typography>No chats available</Typography>
          )}
        </Grid>
      </Grid>

      {/* Floating Action Button */}
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: "fixed", bottom: 76, right: 16 }}
        onClick={handleFabClick}
      >
        <FaPlus />
      </Fab>

      {/* Menu for FAB options */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        transformOrigin={{ vertical: "bottom", horizontal: "right" }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MenuItem onClick={handleNewChat}>New Chat</MenuItem>
        <MenuItem onClick={handleNewGroupChat}>New Group Chat</MenuItem>
      </Menu>
    </Box>
  );
};

export default ChatsPage;
