import { Typography, Box, Card, CardContent, CardHeader } from "@mui/material";
import { styled } from "@mui/system";
import { FaBriefcase, FaChartLine, FaAward } from "react-icons/fa";

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
      icon: <FaBriefcase size={40} color="#f44336" />, // HR Department icon
      borderColor: "#f44336", // Red for HR Department
    },
    {
      title: "Recent News: Industry Trends",
      description:
        "Stay up-to-date with the latest industry trends and their impact on our business.",
      author: "Marketing Team",
      icon: <FaChartLine size={40} color="#ff9800" />, // Marketing Team icon
      borderColor: "#ff9800", // Orange for Marketing Team
    },
    {
      title: "Recognition and Achievements: Employee of the Month",
      description:
        "Congratulations to [Employee Name] for being named Employee of the Month! Their exceptional work has made a significant impact on our team.",
      author: "Management Team",
      icon: <FaAward size={40} color="#4caf50" />, // Management Team icon
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
            avatar={announcement.icon}
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
