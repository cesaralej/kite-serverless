import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const footerHeight = 100;

const MainLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          flexGrow: 1,
          padding: 3,
          marginTop: 1,
          paddingBottom: `${footerHeight}px`,
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default MainLayout;
