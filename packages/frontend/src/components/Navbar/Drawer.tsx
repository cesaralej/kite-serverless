import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  List,
  Divider,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";

interface DrawerItem {
  text?: string;
  icon: JSX.Element;
  dividerBefore?: boolean;
  path: string;
}

interface DrawerComponentProps {
  items: DrawerItem[];
  toggleDrawer: (open: boolean) => void;
}

const DrawerComponent: React.FC<DrawerComponentProps> = ({
  items,
  toggleDrawer,
}) => {
  const navigate = useNavigate();
  const handleItemClick = (path: string) => {
    toggleDrawer(false);
    navigate(path);
  };
  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
    >
      <List>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {item.dividerBefore ? (
              <Divider />
            ) : (
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleItemClick(item.path)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default DrawerComponent;
