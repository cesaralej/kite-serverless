import {
  Typography,
  Box,
  Card,
  CardContent,
  CardHeader,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/system";
import { FaHeart, FaDumbbell } from "react-icons/fa";

// Styled card with modern design
const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  borderLeft: `4px solid green`,
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-4px)",
  },
}));

const HealthAndWellness = () => {
  return (
    <Box mb={4}>
      <Typography variant="h5" gutterBottom>
        Health and Wellness
      </Typography>
      <StyledCard>
        <CardHeader
          avatar={
            <Avatar>
              <FaHeart />
            </Avatar>
          }
          title={<Typography variant="h6">Wellness Tips</Typography>}
        />
        <CardContent>
          <Typography variant="body2">
            &quot;Take regular breaks to stay focused.&quot;
          </Typography>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardHeader
          avatar={
            <Avatar>
              <FaDumbbell />
            </Avatar>
          }
          title={<Typography variant="h6">Fitness Challenges</Typography>}
        />
        <CardContent>
          <Typography variant="body2">
            Join the 30-day fitness challenge.
          </Typography>
        </CardContent>
      </StyledCard>
    </Box>
  );
};

export default HealthAndWellness;
