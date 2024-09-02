import React from "react";
import Header from "../components/Tasks/Header";
import FilterAndSort from "../components/Tasks/FilterAndSort";
import TaskList from "../components/Tasks/TaskList";
import { Box, Fab } from "@mui/material";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TasksPage: React.FC = () => {
  const navigate = useNavigate();
  const handleFabClick = () => {
    console.log("FAB clicked");
    navigate("/tasks/new");
  };
  return (
    <Box>
      <Header />
      <FilterAndSort />
      <TaskList />

      {/* Floating Action Button */}
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: "fixed", bottom: 76, right: 16 }}
        onClick={handleFabClick}
      >
        <FaPlus />
      </Fab>
    </Box>
  );
};

export default TasksPage;
