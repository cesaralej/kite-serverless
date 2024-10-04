import React, { useState } from "react";
import { Box, Chip, IconButton, Menu, MenuItem } from "@mui/material";
import { FaSort } from "react-icons/fa";

const FilterAndSort: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [filters, setFilters] = useState<{ [key: string]: string }>({
    status: "All",
    priority: "All",
  });

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFilterChange = (filterType: string, filterValue: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: filterValue,
    }));
    setAnchorEl(null);
  };

  const handleSortClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSortClose = () => {
    setAnchorEl(null);
  };

  const toggleFilter = (filterType: string, filterValue: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: prevFilters[filterType] === filterValue ? "" : filterValue,
    }));
  };

  return (
    <Box
      sx={{
        p: 2,
        display: "flex",
        flexWrap: "wrap",
        gap: 1,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", gap: 1 }}>
        {/* Status Filters */}
        <Chip
          label={`Status: ${filters.status}`}
          onClick={handleClick}
          sx={{ cursor: "pointer", backgroundColor: "#E0E0E0" }}
        />
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Box sx={{ p: 1 }}>
            <MenuItem onClick={() => handleFilterChange("status", "All")}>
              All
            </MenuItem>
            <MenuItem onClick={() => handleFilterChange("status", "To Do")}>
              To Do
            </MenuItem>
            <MenuItem
              onClick={() => handleFilterChange("status", "In Progress")}
            >
              In Progress
            </MenuItem>
            <MenuItem onClick={() => handleFilterChange("status", "Completed")}>
              Completed
            </MenuItem>
          </Box>
        </Menu>
        <Chip
          label={`Priority: ${filters.priority}`}
          onClick={handleClick}
          sx={{ cursor: "pointer", backgroundColor: "#E0E0E0" }}
        />
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Box sx={{ p: 1 }}>
            <MenuItem onClick={() => handleFilterChange("priority", "All")}>
              All
            </MenuItem>
            <MenuItem onClick={() => handleFilterChange("priority", "High")}>
              High
            </MenuItem>
            <MenuItem onClick={() => handleFilterChange("priority", "Medium")}>
              Medium
            </MenuItem>
            <MenuItem onClick={() => handleFilterChange("priority", "Low")}>
              Low
            </MenuItem>
          </Box>
        </Menu>

        <Chip
          label="To Do"
          color={filters.status === "To Do" ? "primary" : "default"}
          onClick={() => toggleFilter("status", "To Do")}
          sx={{ cursor: "pointer" }}
        />
        <Chip
          label="In Progress"
          color={filters.status === "In Progress" ? "primary" : "default"}
          onClick={() => toggleFilter("status", "In Progress")}
          sx={{ cursor: "pointer" }}
        />
        <Chip
          label="Completed"
          color={filters.status === "Completed" ? "primary" : "default"}
          onClick={() => toggleFilter("status", "Completed")}
          sx={{ cursor: "pointer" }}
        />
      </Box>

      {/* Priority Filters */}
      <Box sx={{ display: "flex", gap: 1 }}>
        <Chip
          label="High Priority"
          color={filters.priority === "High" ? "secondary" : "default"}
          onClick={() => toggleFilter("priority", "High")}
          sx={{ cursor: "pointer" }}
        />
        <Chip
          label="Medium Priority"
          color={filters.priority === "Medium" ? "secondary" : "default"}
          onClick={() => toggleFilter("priority", "Medium")}
          sx={{ cursor: "pointer" }}
        />
        <Chip
          label="Low Priority"
          color={filters.priority === "Low" ? "secondary" : "default"}
          onClick={() => toggleFilter("priority", "Low")}
          sx={{ cursor: "pointer" }}
        />
      </Box>

      {/* Sort Button */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton onClick={handleSortClick}>
          <FaSort />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleSortClose}
        >
          <MenuItem onClick={handleSortClose}>Due Date</MenuItem>
          <MenuItem onClick={handleSortClose}>Priority</MenuItem>
          <MenuItem onClick={handleSortClose}>Assigned By</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default FilterAndSort;
