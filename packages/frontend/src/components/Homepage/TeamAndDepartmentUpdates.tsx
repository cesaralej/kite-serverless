import { Typography, Box, Card, CardContent } from "@mui/material";

const TeamAndDepartmentUpdates = () => {
  return (
    <Box mb={4}>
      <Typography variant="h5" gutterBottom>
        Team and Department Updates
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h6">Team-Specific News</Typography>
          <Typography variant="body2">
            Update on the marketing team&apos;s latest campaign.
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h6">Department Achievements</Typography>
          <Typography variant="body2">
            Sales team exceeded Q3 targets!
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TeamAndDepartmentUpdates;
