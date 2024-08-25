import { Typography, Box, Card, CardContent } from "@mui/material";

const InspirationalStories = () => {
  return (
    <Box mb={4}>
      <Typography variant="h5" gutterBottom>
        Inspirational Stories
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h6">Employee Spotlight</Typography>
          <Typography variant="body2">
            &quot;Jane Doe has been recognized for her outstanding leadership in
            the recent project.&quot;
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h6">Success Stories</Typography>
          <Typography variant="body2">
            &quot;Our recent project launch exceeded all expectations.&quot;
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default InspirationalStories;
