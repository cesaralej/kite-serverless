import React from "react";
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
}

interface DrawerComponentProps {
  items: DrawerItem[];
  toggleDrawer: (open: boolean) => void;
}

const DrawerComponent: React.FC<DrawerComponentProps> = ({
  items,
  toggleDrawer,
}) => {
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
                <ListItemButton>
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
