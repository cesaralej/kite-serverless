import React, { MouseEvent } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for routing

const backgroundColor = "#FEF7FF";
const companyName = "KiTE Company";

interface AppBarComponentProps {
  onMenuClick: (event: MouseEvent<HTMLElement>) => void;
  anchorEl: HTMLElement | null;
  handleMenuClose: () => void;
  handleLogout: () => void;
  toggleDrawer: (open: boolean) => void;
}

const AppBarComponent: React.FC<AppBarComponentProps> = ({
  onMenuClick,
  anchorEl,
  handleMenuClose,
  handleLogout,
  toggleDrawer,
}) => (
  <AppBar
    position="fixed"
    sx={{ backgroundColor: backgroundColor, color: "#000", boxShadow: "none" }}
  >
    <Toolbar>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={() => toggleDrawer(true)}
        sx={{ mr: 2, color: "#000" }}
      >
        <FaBars />
      </IconButton>

      <Button
        component={Link}
        to="/"
        sx={{
          flexGrow: 1,
          textTransform: "none",
          color: "#000",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" component="div">
          {companyName}
        </Typography>
      </Button>

      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={onMenuClick}
        sx={{ color: "#000" }}
      >
        <FaUserCircle />
      </IconButton>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        sx={{ mt: 1.5 }}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Log out</MenuItem>
      </Menu>
    </Toolbar>
  </AppBar>
);

export default AppBarComponent;
