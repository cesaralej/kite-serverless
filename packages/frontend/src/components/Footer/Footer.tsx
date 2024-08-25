import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { FaHome, FaComments, FaTasks, FaFolder } from "react-icons/fa";

const NavItemStyles = {
  "&:hover": {
    "&::before": {
      content: '""',
      position: "absolute",
      borderRadius: "20%",
      backgroundColor: "#E8DEF8",
      width: 70,
      height: 40,
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: -1,
    },
  },
  position: "relative",
};

const Footer: React.FC = () => {
  const location = useLocation();
  const [value, setValue] = useState<number>(0);

  // Update the selected icon based on the current URL
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setValue(0);
        break;
      case "/chats":
        setValue(1);
        break;
      case "/tasks":
        setValue(2);
        break;
      case "/files":
        setValue(3);
        break;
      default:
        setValue(0);
        break;
    }
  }, [location.pathname]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        zIndex: 1100,
        backgroundColor: "#FEF7FF",
      }}
    >
      <BottomNavigationAction
        component={Link}
        to="/"
        label="Home"
        icon={<FaHome />}
        sx={NavItemStyles}
      />
      <BottomNavigationAction
        component={Link}
        to="/chats"
        label="Chats"
        icon={<FaComments />}
        sx={NavItemStyles}
      />
      <BottomNavigationAction
        component={Link}
        to="/tasks"
        label="Tasks"
        icon={<FaTasks />}
        sx={NavItemStyles}
      />
      <BottomNavigationAction
        component={Link}
        to="/files"
        label="Files"
        icon={<FaFolder />}
        sx={NavItemStyles}
      />
    </BottomNavigation>
  );
};

export default Footer;
