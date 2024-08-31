import React from "react";
import { Task } from "../types";
import {
  Card,
  CardContent,
  Typography,
  Checkbox,
  FormControlLabel,
  IconButton,
  Box,
} from "@mui/material";
import { MdDelete } from "react-icons/md"; // Import the delete icon

interface TaskCardProps {
  task: Task;
  onComplete: (taskId: number) => void;
  onDelete: (taskId: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onComplete, onDelete }) => {
  return (
    <Card sx={{ mb: 2, display: "flex", alignItems: "center" }}>
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={task.completed}
              onChange={() => onComplete(task.id)}
            />
          }
          label={<Typography variant="body1">{task.text}</Typography>}
        />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body2" color="textSecondary" sx={{ mr: 2 }}>
            Due Date: {task.dueDate}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Status: {task.completed ? "Completed" : "Pending"}
          </Typography>
        </Box>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => onDelete(task.id)}
          sx={{ ml: 2 }}
        >
          <MdDelete /> {/* Replace DeleteIcon with MdDelete */}
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
