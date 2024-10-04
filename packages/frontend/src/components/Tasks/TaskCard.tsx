import React from "react";
import { Card, CardContent, Typography, Box, Chip } from "@mui/material";

interface TaskCardProps {
  title: string;
  assignedBy: string;
  dueDate: string;
  priority: string;
  status: string;
}

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  assignedBy,
  dueDate,
  priority,
  status,
}) => {
  const handleCardClick = () => {
    // Navigate to task detail page (assuming a route like `/tasks/:taskId`)
    console.log("/tasks/1"); // Replace "1" with actual task ID
  };

  // Determine status label color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "success";
      case "In Progress":
        return "warning";
      case "To Do":
      default:
        return "default";
    }
  };

  return (
    <Card
      sx={{
        mb: 2,
        cursor: "pointer",
        borderLeft: `4px solid ${
          priority === "High"
            ? "red"
            : priority === "Medium"
            ? "orange"
            : "green"
        }`,
        "&:hover": {
          backgroundColor: "#f5f5f5",
        },
      }}
      onClick={handleCardClick}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {title}
          </Typography>
          <Chip
            label={status}
            color={getStatusColor(status)}
            size="small"
            sx={{ fontWeight: "bold" }}
          />
        </Box>
        <Typography variant="body2" color="textSecondary">
          Assigned by: {assignedBy}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Due: {dueDate}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
