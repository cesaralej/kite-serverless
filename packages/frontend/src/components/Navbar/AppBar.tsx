import React, { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
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

const backgroundColor = "primary";
const fontColor = "white";
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
}) => {
  const navigate = useNavigate();
  const handleProfileButton = () => {
    navigate("/profile");
    handleMenuClose();
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: backgroundColor,
        boxShadow: "none",
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          aria-label="menu"
          onClick={() => toggleDrawer(true)}
          sx={{ mr: 2, color: fontColor }}
        >
          <FaBars />
        </IconButton>

        <Button
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            textTransform: "none",
            color: fontColor,
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
          sx={{ color: fontColor }}
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
          <MenuItem onClick={handleProfileButton}>Profile</MenuItem>
          <MenuItem onClick={handleLogout}>Log out</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
