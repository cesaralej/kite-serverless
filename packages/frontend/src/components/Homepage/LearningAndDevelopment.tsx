import { Typography, Box, Card, CardContent } from "@mui/material";

const LearningAndDevelopment = () => {
  return (
    <Box mb={4}>
      <Typography variant="h5" gutterBottom>
        Learning and Development
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h6">Upcoming Training</Typography>
          <Typography variant="body2">
            &quot;Leadership Training on Sept 25th.&quot;
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h6">Learning Resources</Typography>
          <Typography variant="body2">
            &quot;Access the latest courses on leadership and management.&quot;
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LearningAndDevelopment;
