import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface TaskCardProps {
  title: string;
  assignedTo: string;
  dueDate: string;
  priority: string;
  status: string;
}

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  assignedTo,
  dueDate,
  priority,
  status,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        mb: 2,
        borderLeft: `4px solid ${
          priority === "High"
            ? "red"
            : priority === "Medium"
            ? "orange"
            : "green"
        }`,
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">{title}</Typography>
          <IconButton onClick={toggleExpand}>
            {expanded ? <FaChevronUp /> : <FaChevronDown />}
          </IconButton>
        </Box>
        <Typography variant="body2">Assigned to: {assignedTo}</Typography>
        <Typography variant="body2">Due: {dueDate}</Typography>
        <Typography variant="body2">Status: {status}</Typography>
        {expanded && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2">
              Full task description goes here...
            </Typography>
            <Button variant="outlined" sx={{ mt: 2 }}>
              Mark as Completed
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default TaskCard;
