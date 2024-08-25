import { Typography, Box, Card, CardContent } from "@mui/material";

const SocialAndCulturalUpdates = () => {
  return (
    <Box mb={4}>
      <Typography variant="h5" gutterBottom>
        Social and Cultural Updates
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h6">Employee Polls</Typography>
          <Typography variant="body2">
            Vote on the next company outing destination.
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h6">Community Involvement</Typography>
          <Typography variant="body2">
            Join our charity run next month.
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h6">Diversity and Inclusion</Typography>
          <Typography variant="body2">
            New diversity training available next week.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SocialAndCulturalUpdates;
