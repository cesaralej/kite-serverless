import React from "react";
import { Box } from "@mui/material";
import TaskCard from "./TaskCard";

const mockTasks = [
  {
    title: "Design Homepage",
    assignedBy: "John Doe",
    dueDate: "2024-09-10",
    priority: "High",
    status: "In Progress",
  },
  {
    title: "Update User Profile",
    assignedBy: "Jane Smith",
    dueDate: "2024-09-12",
    priority: "Medium",
    status: "To Do",
  },
  {
    title: "Fix Login Bug",
    assignedBy: "Mike Johnson",
    dueDate: "2024-09-08",
    priority: "Low",
    status: "Completed",
  },
  {
    title: "Prepare Quarterly Report",
    assignedBy: "Emma Brown",
    dueDate: "2024-09-15",
    priority: "High",
    status: "To Do",
  },
  {
    title: "Conduct Security Audit",
    assignedBy: "David Wilson",
    dueDate: "2024-09-18",
    priority: "High",
    status: "In Progress",
  },
  {
    title: "Develop Marketing Strategy",
    assignedBy: "Laura Garcia",
    dueDate: "2024-09-20",
    priority: "Medium",
    status: "To Do",
  },
  {
    title: "Update Employee Handbook",
    assignedBy: "Robert Martinez",
    dueDate: "2024-09-25",
    priority: "Low",
    status: "To Do",
  },
  {
    title: "Test Payment Gateway",
    assignedBy: "Sophia Lee",
    dueDate: "2024-09-17",
    priority: "High",
    status: "In Progress",
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
