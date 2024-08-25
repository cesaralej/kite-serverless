import React from "react";
import { Typography, Button } from "@mui/material";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <section
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "24rem",
      }}
    >
      <FaExclamationTriangle
        style={{ color: "#FFEB3B", fontSize: "6rem", marginBottom: "1rem" }}
      />
      <Typography variant="h1" component="h1" fontWeight="bold" gutterBottom>
        404 Not Found
      </Typography>
      <Typography variant="h6" component="p" gutterBottom>
        This page does not exist
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        color="primary"
        sx={{ marginTop: "1rem", padding: "0.5rem 1.5rem" }}
      >
        Go Back
      </Button>
    </section>
  );
};

export default NotFoundPage;
