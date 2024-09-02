import React, { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { FaHome, FaComments, FaTasks, FaFolder } from "react-icons/fa";

const backgroundColor = "#1976d2";
const fontColor = "white";
const activeColor = "#ffffff";
const inactiveColor = "rgba(255, 255, 255, 0.7)";

const NavItem = ({
  to,
  label,
  icon,
  value,
  setValue,
  active,
}: {
  to: string;
  label: string;
  icon: React.ReactElement;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  active: boolean;
}) => (
  <BottomNavigationAction
    component={Link}
    to={to}
    label={label}
    icon={
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {icon}
      </Box>
    }
    value={value}
    sx={{
      color: active ? activeColor : inactiveColor,
      "&.Mui-selected": {
        color: activeColor,
      },
      position: "relative",
    }}
    onClick={() => setValue(value)}
  />
);

const Footer: React.FC = () => {
  const location = useLocation();
  const [value, setValue] = useState<number>(0);

  const navItems = useMemo(
    () => [
      { label: "Home", icon: <FaHome />, to: "/", value: 0 },
      { label: "Chats", icon: <FaComments />, to: "/chats", value: 1 },
      { label: "Tasks", icon: <FaTasks />, to: "/tasks", value: 2 },
      { label: "Files", icon: <FaFolder />, to: "/files", value: 3 },
    ],
    []
  );

  useEffect(() => {
    const currentItem = navItems.find(
      (item: { to: string }) => item.to === location.pathname
    );
    setValue(currentItem ? currentItem.value : 0);
  }, [location.pathname, navItems]);

  return (
    <BottomNavigation
      value={value}
      onChange={(_event, newValue) => setValue(newValue)}
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        zIndex: 1100,
        backgroundColor: backgroundColor,
        color: fontColor,
        height: "56px",
        borderTop: `1px solid ${inactiveColor}`,
      }}
    >
      {navItems.map((item) => (
        <NavItem
          key={item.label}
          to={item.to}
          label={item.label}
          icon={item.icon}
          value={item.value}
          setValue={setValue}
          active={value === item.value}
        />
      ))}
    </BottomNavigation>
  );
};

export default Footer;
