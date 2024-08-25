import React, { useState, MouseEvent } from "react";
import { Box, Drawer, Toolbar } from "@mui/material";
//import { useNavigate } from "react-router-dom";
import AppBarComponent from "./AppBar";
import DrawerComponent from "./Drawer";
import {
  FaUsers,
  FaDesktop,
  FaFileAlt,
  FaCalendarAlt,
  FaDollarSign,
  FaBell,
  FaCog,
  FaExclamationTriangle,
  FaClock,
} from "react-icons/fa";

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  //const navigate = useNavigate();

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  const handleMenuClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    //navigate("/login");
    console.log("Logged out");
    handleMenuClose();
  };

  const drawerItems = [
    { text: "HR Support", icon: <FaUsers /> },
    { text: "IT Support", icon: <FaDesktop /> },
    { text: "Timesheets", icon: <FaClock /> },
    { text: "Document Request", icon: <FaFileAlt /> },
    { text: "Time Off Request", icon: <FaCalendarAlt /> },
    { text: "Company Benefits", icon: <FaDollarSign /> },
    { icon: <FaUsers />, dividerBefore: true },
    { text: "Notifications", icon: <FaBell /> },
    { text: "Settings", icon: <FaCog /> },
    { text: "Help", icon: <FaExclamationTriangle /> },
  ];

  return (
    <Box sx={{ flexGrow: 1 }} textAlign={"center"}>
      <AppBarComponent
        onMenuClick={handleMenuClick}
        anchorEl={anchorEl}
        handleMenuClose={handleMenuClose}
        handleLogout={handleLogout}
        toggleDrawer={toggleDrawer}
      />
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 240,
          },
        }}
      >
        <DrawerComponent
          items={drawerItems} // Ensure the prop name matches
          toggleDrawer={toggleDrawer}
        />
      </Drawer>
      <Toolbar />
      {/* Body content goes here */}
    </Box>
  );
};

export default Navbar;
