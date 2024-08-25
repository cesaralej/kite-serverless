import { Typography, Box, List, ListItem, ListItemText } from "@mui/material";

const TaskManagement = () => {
  const tasks = [
    { title: "Finish report", due: "Today", status: "Overdue" },
    { title: "Prepare presentation", due: "Tomorrow", status: "Upcoming" },
    { title: "Submit timesheet", due: "Next Week", status: "Upcoming" },
  ];

  return (
    <Box mb={4}>
      <Typography variant="h5" gutterBottom>
        Task and Project Management
      </Typography>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={task.title}
              secondary={`Due: ${task.due} - ${task.status}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TaskManagement;
