import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Container, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const user = "sampleUser";
const error = null;

const Login: React.FC = () => {
  const navigate = useNavigate();
  //const [user, setUser] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      navigate("/"); // Redirect to home if already logged in
    }
  }, [user, navigate]);

  const handleLogin = async () => {
    navigate("/");
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        height="100vh"
        textAlign="center"
        alignItems="center"
      >
        {/* Placeholder image for the app logo */}
        <img
          src={logo}
          alt="App Logo"
          width="150"
          height="150"
          style={{ marginBottom: "20px" }}
        />
        <Typography variant="h4" gutterBottom>
          KiTE
        </Typography>
        <Typography variant="h6" gutterBottom>
          Please log in to continue
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
        >
          Log In
        </Button>
        {error && (
          <Typography color="error" variant="body2" marginTop={2}>
            {error}
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default Login;
