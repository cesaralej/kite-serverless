import React from "react";
import { Typography, Box } from "@mui/material";

interface WelcomeMessageProps {
  name: string;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ name }) => {
  const getGreeting = (): string => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <Box mb={4}>
      <Typography variant="h4">{`${getGreeting()}, ${name}! Here's what's happening today.`}</Typography>
      <Typography variant="subtitle1" color="textSecondary">
        &quot;Inspiring Quote or Company Mission Statement Here&quot;
      </Typography>
    </Box>
  );
};

export default WelcomeMessage;
