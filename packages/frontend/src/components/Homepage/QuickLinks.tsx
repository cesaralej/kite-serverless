import { Typography, Box, Link } from "@mui/material";

const QuickLinks = () => {
  return (
    <Box mb={4}>
      <Typography variant="h5" gutterBottom>
        Quick Links and Resources
      </Typography>
      <Link href="/hr-portal" variant="body2">
        HR Portal
      </Link>
      <br />
      <Link href="/timesheets" variant="body2">
        Timesheets
      </Link>
      <br />
      <Link href="/crm" variant="body2">
        CRM System
      </Link>
      <br />
    </Box>
  );
};

export default QuickLinks;
