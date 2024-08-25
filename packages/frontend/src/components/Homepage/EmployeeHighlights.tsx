import React from "react";
import { Typography, Box, Card, CardContent, CardHeader } from "@mui/material";
import { FaBirthdayCake, FaTrophy, FaUserPlus } from "react-icons/fa";

// Define an array of highlight data
const highlights = [
  {
    id: 1,
    title: "Birthdays",
    icon: <FaBirthdayCake size={24} color="#f57c00" />,
    bgColor: "#ffecb3",
    text: "John Doe's birthday is today!",
  },
  {
    id: 2,
    title: "Work Anniversaries",
    icon: <FaTrophy size={24} color="#4caf50" />,
    bgColor: "#c8e6c9",
    text: "Jane Smith celebrates 5 years this week.",
  },
  {
    id: 3,
    title: "New Hires",
    icon: <FaUserPlus size={24} color="#2196f3" />,
    bgColor: "#bbdefb",
    text: "Welcome new team member Alice Brown!",
  },
];

// Functional component to render a single card
const HighlightCard = ({
  title,
  icon,
  bgColor,
  text,
}: {
  title: string;
  icon: React.ReactNode;
  bgColor: string;
  text: string;
}) => (
  <Card variant="outlined" sx={{ mb: 2 }}>
    <CardHeader avatar={icon} title={title} sx={{ bgcolor: bgColor }} />
    <CardContent>
      <Typography variant="body2">{text}</Typography>
    </CardContent>
  </Card>
);

const EmployeeHighlights = () => {
  return (
    <Box mb={4}>
      <Typography variant="h5" gutterBottom>
        Employee Highlights
      </Typography>
      {highlights.map(({ id, title, icon, bgColor, text }) => (
        <HighlightCard
          key={id}
          title={title}
          icon={icon}
          bgColor={bgColor}
          text={text}
        />
      ))}
    </Box>
  );
};

export default EmployeeHighlights;
