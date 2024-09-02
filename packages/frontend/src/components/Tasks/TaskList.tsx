import React from "react";
import { Box } from "@mui/material";
import TaskCard from "./TaskCard";

const mockTasks = [
  {
    title: "Design Homepage",
    assignedTo: "John Doe",
    dueDate: "2024-09-10",
    priority: "High",
    status: "In Progress",
  },
  {
    title: "Update User Profile",
    assignedTo: "Jane Smith",
    dueDate: "2024-09-12",
    priority: "Medium",
    status: "To Do",
  },
  {
    title: "Fix Login Bug",
    assignedTo: "Mike Johnson",
    dueDate: "2024-09-08",
    priority: "Low",
    status: "Completed",
  },
];

const TaskList: React.FC = () => {
  return (
    <Box sx={{ p: 2 }}>
      {mockTasks.map((task, index) => (
        <TaskCard key={index} {...task} />
      ))}
    </Box>
  );
};

export default TaskList;
