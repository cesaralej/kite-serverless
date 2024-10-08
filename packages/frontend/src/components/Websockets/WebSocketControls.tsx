import { Button, Typography, Box } from "@mui/material";
import { FiRefreshCw, FiPower, FiWifi } from "react-icons/fi";
import Spinner from "../Spinner"; // Assuming Spinner is a custom component

interface WebSocketControlsProps {
  connectionStatus: string;
  connectWebSocket: () => void;
  disconnectWebSocket: () => void;
  handleRefreshUsers: () => void;
  isLoading: boolean;
}

const WebSocketControls = ({
  connectionStatus,
  connectWebSocket,
  disconnectWebSocket,
  handleRefreshUsers,
  isLoading,
}: WebSocketControlsProps) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    p={2}
    bgcolor="#f5f5f5"
    borderRadius="8px"
    boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
    width={{ xs: "100%", sm: "80%", md: "60%" }}
    maxWidth="400px"
    mx="auto"
    my={2}
  >
    <Typography
      variant="body1"
      color={connectionStatus === "Connected" ? "green" : "red"}
      gutterBottom
      fontSize={{ xs: "14px", sm: "16px" }}
    >
      Status: {connectionStatus}
    </Typography>

    <Box
      display="flex"
      flexDirection="row" // Stacks vertically on mobile
      justifyContent="center"
      gap={2}
      mt={2}
      width="100%"
    >
      <Button
        variant="contained"
        color="primary"
        startIcon={<FiWifi />}
        onClick={connectWebSocket}
        fullWidth
      >
        On
      </Button>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<FiPower />}
        onClick={disconnectWebSocket}
        fullWidth
      >
        Off
      </Button>
      <Button
        variant="outlined"
        color="success"
        startIcon={<FiRefreshCw />}
        onClick={handleRefreshUsers}
        fullWidth
      ></Button>
    </Box>

    {isLoading && (
      <Box mt={3} width="100%" display="flex" justifyContent="center">
        <Spinner loading={true} />
      </Box>
    )}
  </Box>
);

export default WebSocketControls;
