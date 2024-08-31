import {
  Typography,
  Box,
  Card,
  CardContent,
  CardHeader,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/system";

// Define a styled card with dynamic border color
const StyledCard = styled(Card)<{ bordercolor: string }>(
  ({ bordercolor, theme }) => ({
    marginBottom: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    borderLeft: `4px solid ${bordercolor}`,
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-3px)",
    },
  })
);

const CompanyAnnouncements = () => {
  const announcements = [
    {
      title: "Important Update: New Company Policy",
      description:
        "We're excited to announce a new company policy that will benefit all employees. Please review the details in the company intranet.",
      author: "HR Department",
      avatar: "https://example.com/hr-avatar.jpg",
      borderColor: "#f44336", // Red for HR Department
    },
    {
      title: "Recent News: Industry Trends",
      description:
        "Stay up-to-date with the latest industry trends and their impact on our business.",
      author: "Marketing Team",
      avatar: "https://example.com/marketing-avatar.jpg",
      borderColor: "#ff9800", // Orange for Marketing Team
    },
    {
      title: "Recognition and Achievements: Employee of the Month",
      description:
        "Congratulations to [Employee Name] for being named Employee of the Month! Their exceptional work has made a significant impact on our team.",
      author: "Management Team",
      avatar: "https://example.com/management-avatar.jpg",
      borderColor: "#4caf50", // Green for Management Team
    },
  ];

  return (
    <Box mb={4}>
      <Typography variant="h5" gutterBottom>
        Company Announcements
      </Typography>
      {announcements.map((announcement, index) => (
        <StyledCard key={index} bordercolor={announcement.borderColor}>
          <CardHeader
            avatar={
              // <Avatar src={announcement.avatar} alt={announcement.author} />
              <Avatar src={announcement.author} />
            }
            title={<Typography variant="h6">{announcement.title}</Typography>}
            subheader={
              <Typography variant="body2" color="textSecondary">
                {announcement.author}
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary">
              {announcement.description}
            </Typography>
          </CardContent>
        </StyledCard>
      ))}
    </Box>
  );
};

export default CompanyAnnouncements;
