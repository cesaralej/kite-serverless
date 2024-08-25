import React from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
} from "@mui/material";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

// Define the events data
const events = [
  {
    id: 1,
    title: "Company Town Hall",
    description:
      "Join us for the upcoming town hall event next Friday to hear about the latest company updates.",
    date: "2024-08-23",
    time: "10:00 AM",
    location: "Conference Room A",
    icon: <FaCalendarAlt size={24} color="#ff9800" />,
    bgColor: "#ffe0b2",
  },
  {
    id: 2,
    title: "Company Anniversary",
    description:
      "Celebrating 20 years of success! Join us for a special event next month.",
    date: "2024-09-12",
    time: "2:00 PM",
    location: "Event Hall",
    icon: <FaCalendarAlt size={24} color="#4caf50" />,
    bgColor: "#c8e6c9",
  },
];

// Functional component to render a single event card
const EventCard = ({
  title,
  description,
  date,
  time,
  location,
  icon,
  bgColor,
}: {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  icon: React.ReactNode;
  bgColor: string;
}) => (
  <Card variant="outlined" sx={{ mb: 2 }}>
    <CardHeader
      avatar={icon}
      title={title}
      subheader={`${date} at ${time}`}
      sx={{ bgcolor: bgColor }}
    />
    <CardContent>
      <Typography variant="body2" paragraph>
        {description}
      </Typography>
      <Divider sx={{ my: 1 }} />
      <Typography variant="body2">
        <FaMapMarkerAlt size={16} color="#2196f3" /> Location: {location}
      </Typography>
    </CardContent>
  </Card>
);

const EventsCard = () => {
  return (
    <Box mb={4}>
      <Typography variant="h5" gutterBottom>
        Event Notifications
      </Typography>
      {events.map(
        ({ id, title, description, date, time, location, icon, bgColor }) => (
          <EventCard
            key={id}
            title={title}
            description={description}
            date={date}
            time={time}
            location={location}
            icon={icon}
            bgColor={bgColor}
          />
        )
      )}
    </Box>
  );
};

export default EventsCard;
