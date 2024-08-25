import {
  Typography,
  Box,
  Badge,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const NotificationsSummary = () => {
  const notifications = [
    { text: "3 unread messages in chats.", actionRequired: false },
    { text: "Task approval pending.", actionRequired: true },
  ];

  return (
    <Box mb={4}>
      <Typography variant="h5" gutterBottom>
        Notifications Summary
      </Typography>
      <List>
        {notifications.map((notification, index) => (
          <ListItem key={index}>
            <Badge
              color={notification.actionRequired ? "error" : "default"}
              variant="dot"
            >
              <ListItemText primary={notification.text} />
            </Badge>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default NotificationsSummary;
