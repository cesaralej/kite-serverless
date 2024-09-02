import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
} from "@mui/material";
import {
  FaBook,
  FaChalkboardTeacher,
  FaStar,
  FaHistory,
  FaArrowRight,
} from "react-icons/fa";

const mockData = {
  featuredResources: [
    {
      title: "Company Policies Overview",
      image:
        "https://images.blog.airmason.com/wp-content/uploads/2023/10/Understanding-the-Essence-Company-Policies-Definition.png",
      description: "An overview of our company's key policies and procedures.",
    },
    {
      title: "Data Privacy and Security Training",
      image:
        "https://cloudinary.hbs.edu/hbsit/image/upload/s--TVkX_4JC--/f_auto,c_fill,h_375,w_750,/v20200101/405485CC24CDD4B99A62C0F87B02E356.jpg",
      description:
        "Essential training on data privacy and security best practices.",
    },
  ],
  categories: [
    { name: "Company Policies", icon: <FaBook /> },
    { name: "Required Trainings", icon: <FaChalkboardTeacher /> },
    { name: "Compliance", icon: <FaStar /> },
    { name: "Health & Safety", icon: <FaHistory /> },
  ],
  recentResources: [
    {
      title: "Annual Compliance Training",
      description:
        "Complete your annual compliance training to stay up-to-date with regulations.",
    },
    {
      title: "Cybersecurity Awareness",
      description:
        "Learn about the latest cybersecurity threats and how to protect company data.",
    },
  ],
};

const LearningResourcesPage: React.FC = () => {
  return (
    <Box sx={{ padding: 2 }}>
      {/* Featured Courses Section */}
      <Typography variant="h5" gutterBottom>
        Featured Courses
      </Typography>
      <Grid container spacing={2}>
        {mockData.featuredResources.map((course, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card
              sx={{ display: "flex", flexDirection: "column", height: "100%" }}
            >
              <CardMedia
                component="img"
                height="140"
                image={course.image}
                alt={course.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div">
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {course.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Categories Section */}
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h5" gutterBottom>
          Categories
        </Typography>
        <Grid container spacing={2}>
          {mockData.categories.map((category, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Chip
                icon={category.icon}
                label={category.name}
                sx={{
                  padding: 2,
                  fontSize: "1rem",
                  width: "100%",
                  justifyContent: "flex-start",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Recently Accessed Resources Section */}
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h5" gutterBottom>
          Recently Accessed
        </Typography>
        {mockData.recentResources.map((resource, index) => (
          <Card sx={{ marginBottom: 2 }} key={index}>
            <CardContent>
              <Typography variant="h6" component="div">
                {resource.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {resource.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Explore More Button */}
      <Box sx={{ textAlign: "center", marginTop: 4 }}>
        <Button variant="contained" color="primary" endIcon={<FaArrowRight />}>
          Explore More Resources
        </Button>
      </Box>
    </Box>
  );
};

export default LearningResourcesPage;
