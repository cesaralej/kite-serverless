import React from "react";
import { Box, Button, Menu, MenuItem, IconButton } from "@mui/material";
import { FaSort } from "react-icons/fa";

const FilterAndSort: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ p: 2, display: "flex", justifyContent: "space-between" }}>
      <Button variant="outlined">Filter</Button>
      <IconButton onClick={handleClick}>
        <FaSort />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Sort by Due Date</MenuItem>
        <MenuItem onClick={handleClose}>Sort by Priority</MenuItem>
        <MenuItem onClick={handleClose}>Sort by Assignee</MenuItem>
      </Menu>
    </Box>
  );
};

export default FilterAndSort;
