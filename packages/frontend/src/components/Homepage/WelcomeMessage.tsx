import React from "react";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import { FaSun, FaMoon } from "react-icons/fa";
import banner from "../../assets/banner.jpg";

interface WelcomeMessageProps {
  name?: string | null;
}

const Banner = styled(Box)(() => ({
  position: "relative",
  borderRadius: "8px",
  padding: "20px",
  marginBottom: "20px",
  color: "black",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  overflow: "hidden", // Ensures that the pseudo-element doesn't spill out of the container

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.3, // Adjust this value for more or less opacity
    zIndex: -1, // Ensures the image stays behind the content
  },
}));

const IconWrapper = styled(Box)({
  fontSize: "36px",
  display: "flex",
  alignItems: "center",
  marginRight: "15px",
});

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
      <Box mb={4}>
        <Typography variant="h4" sx={{ marginBottom: "16px" }}>
          {getGreeting()},{" "}
          <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
            {name ? name : "Guest"}!
          </span>{" "}
          Here's what's happening today.
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          &quot;Inspiring Quote or Company Mission Statement Here&quot;
        </Typography>
      </Box>
    </Banner>
  );
};

export default WelcomeMessage;
