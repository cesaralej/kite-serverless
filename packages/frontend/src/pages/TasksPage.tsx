import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import TaskCard from "../components/TaskCard";

const LOCAL_STORAGE_KEY = "tasks";

interface Task {
  id: number;
  text: string;
  completed: boolean;
  dueDate: string;
}

// Define placeholder tasks with due dates
const placeholderTasks: Task[] = [
  {
    id: 1,
    text: "Finish the project report",
    completed: false,
    dueDate: "2024-08-22",
  },
  {
    id: 2,
    text: "Prepare for the team meeting",
    completed: false,
    dueDate: "2024-08-23",
  },
  {
    id: 3,
    text: "Review the new marketing strategy",
    completed: true,
    dueDate: "2024-08-20",
  },
];

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");

  // Load tasks from local storage or use placeholder tasks if no tasks are stored
  useEffect(() => {
    const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks);
      if (parsedTasks.length) {
        setTasks(parsedTasks);
      } else {
        // Initialize with placeholder tasks
        setTasks(placeholderTasks);
      }
    } else {
      // Initialize with placeholder tasks
      setTasks(placeholderTasks);
    }
  }, []);

  // Save tasks to local storage whenever the tasks array changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.trim() && dueDate) {
      const newTasks: Task[] = [
        ...tasks,
        { id: Date.now(), text: newTask, completed: false, dueDate },
      ];
      setTasks(newTasks);
      setNewTask("");
      setDueDate("");
    }
  };

  const handleCompleteTask = (taskId: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Tasks
      </Typography>
      <Typography variant="body1" paragraph>
        Here you can view and manage your tasks.
      </Typography>

      {/* Task Input and Add Button */}
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={8}>
          <TextField
            label="New Task"
            variant="outlined"
            fullWidth
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="Due Date"
            type="date"
            variant="outlined"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleAddTask}
          >
            Add Task
          </Button>
        </Grid>
      </Grid>

      {/* Task List */}
      <Box sx={{ mt: 2 }}>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onComplete={handleCompleteTask}
            onDelete={handleDeleteTask}
          />
        ))}
      </Box>
    </>
  );
};

export default Tasks;
