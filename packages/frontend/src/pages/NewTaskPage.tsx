import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  Select,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const NewTaskPage: React.FC = () => {
  const [assignedTo, setAssignedTo] = useState<string>("");
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [priority, setPriority] = useState<string>("");
  //const [dueDate, setDueDate] = useState<Date | null>(null);
  //const [dueTime, setDueTime] = useState<Date | null>(null);
  const [addToChat, setAddToChat] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Placeholder function for form submission
    console.log("Task Submitted");
    navigate("/tasks");
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: "0 auto",
        padding: 2,
        backgroundColor: "#ffffff",
        borderRadius: 2,
        boxShadow: 1,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Create New Task
      </Typography>
      {/* Task Assignment */}
      <TextField
        fullWidth
        label="Assign Task"
        value={assignedTo}
        onChange={(e) => setAssignedTo(e.target.value)}
        select
        variant="outlined"
        sx={{ mb: 2 }}
      >
        {/* Placeholder options */}
        <MenuItem value="self">Assign to Myself</MenuItem>
        <MenuItem value="teamMember1">Team Member 1</MenuItem>
        <MenuItem value="teamMember2">Team Member 2</MenuItem>
      </TextField>
      {/* Task Title */}
      <TextField
        fullWidth
        label="Task Title"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        variant="outlined"
        sx={{ mb: 2 }}
      />
      {/* Task Description */}
      <TextField
        fullWidth
        label="Task Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        variant="outlined"
        multiline
        rows={4}
        sx={{ mb: 2 }}
      />
      {/* Priority */}
      <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
        <InputLabel>Priority</InputLabel>
        <Select
          value={priority}
          onChange={(e) => setPriority(e.target.value as string)}
          label="Priority"
        >
          <MenuItem value="high">High</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="low">Low</MenuItem>
        </Select>
      </FormControl>
      {/* Due Date and Time */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box sx={{ mb: 2 }}>
          <DatePicker
            label="Due Date"
            //value={dueDate}
            //onChange={(date: Date | null) => setDueDate(date)}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TimePicker
            label="Due Time"
            //value={dueTime}
            //onChange={(time: Date | null) => setDueTime(time)}
          />
        </Box>
      </LocalizationProvider>
      {/* Add to Chat */}
      <FormControlLabel
        control={
          <Checkbox
            checked={addToChat}
            onChange={(e) => setAddToChat(e.target.checked)}
          />
        }
        label="Add to Chat"
        sx={{ mb: 2 }}
      />
      {/* Submit Button */}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Box>
  );
};

export default NewTaskPage;
