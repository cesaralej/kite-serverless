import React from "react";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import { FaSun, FaMoon } from "react-icons/fa";

interface WelcomeMessageProps {
  name?: string | null;
}

const Banner = styled(Box)(() => ({
  position: "relative",
  borderRadius: "12px",
  padding: "24px",
  marginBottom: "24px",
  backgroundColor: "#f5f5f5",
  color: "#333",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
}));

const IconWrapper = styled(Box)(() => ({
  fontSize: "32px",
  color: "black",
  display: "flex",
  alignItems: "center",
  marginRight: "16px",
}));

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ name }) => {
  const getGreeting = (): string => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const getGreetingIcon = () => {
    const hour = new Date().getHours();
    if (hour < 18) return <FaSun />;
    return <FaMoon />;
  };

  return (
    <Banner>
      <IconWrapper>{getGreetingIcon()}</IconWrapper>
      <Box>
        <Typography variant="h4" sx={{ fontWeight: 600, marginBottom: "8px" }}>
          {getGreeting()},{" "}
          <span style={{ fontWeight: 700, fontStyle: "italic" }}>
            {name ? name : "Guest"}!
          </span>
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          "Inspiring Quote or Company Mission Statement Here"
        </Typography>
      </Box>
    </Banner>
  );
};

export default WelcomeMessage;
