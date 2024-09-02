import React from "react";
import { Typography } from "@mui/material";

const Header: React.FC = () => {
  return (
    <>
      {" "}
      <Typography variant="h4" component="h1" gutterBottom>
        Tasks
      </Typography>
    </>
  );
};

export default Header;
