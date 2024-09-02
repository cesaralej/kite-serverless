import React, { useState } from "react";
import {
  Box,
  Toolbar,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  Avatar,
  ListItemText,
  Divider,
  Menu,
  MenuItem,
  Chip,
} from "@mui/material";
import { FaSearch, FaFilter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Mock data for employees
const mockEmployees = [
  {
    id: 1,
    name: "Alice Johnson",
    jobTitle: "Software Engineer",
    department: "Engineering",
    status: "online",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=female",
  },
  {
    id: 2,
    name: "Bob Smith",
    jobTitle: "Product Manager",
    department: "Product",
    status: "away",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
  },
  {
    id: 3,
    name: "Catherine Green",
    jobTitle: "HR Specialist",
    department: "Human Resources",
    status: "offline",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=female",
  },
  {
    id: 4,
    name: "David Brown",
    jobTitle: "UX Designer",
    department: "Design",
    status: "online",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
  },
  {
    id: 5,
    name: "Emily White",
    jobTitle: "Data Analyst",
    department: "Data Science",
    status: "offline",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=female",
  },
  {
    id: 6,
    name: "Frank Harris",
    jobTitle: "DevOps Engineer",
    department: "Engineering",
    status: "online",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
  },
  {
    id: 7,
    name: "Grace Lee",
    jobTitle: "Marketing Specialist",
    department: "Marketing",
    status: "away",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=female",
  },
  {
    id: 8,
    name: "Henry Adams",
    jobTitle: "Customer Support",
    department: "Support",
    status: "online",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
  },
  {
    id: 9,
    name: "Ivy Walker",
    jobTitle: "Sales Executive",
    department: "Sales",
    status: "offline",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=female",
  },
  {
    id: 10,
    name: "Jack Wilson",
    jobTitle: "Project Manager",
    department: "Project Management",
    status: "online",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
  },
];

const EmployeeDirectory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterAnchorEl, setFilterAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [sortOption, setSortOption] = useState<string>("alphabetical");
  const [filteredEmployees] = useState(mockEmployees);

  const navigate = useNavigate();

  // Handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Handle opening filter menu
  const handleFilterClick = (event: React.MouseEvent<HTMLElement>) => {
    setFilterAnchorEl(event.currentTarget);
  };

  // Handle closing filter menu
  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  // Handle sorting or filtering
  const applyFilterOrSort = (option: string) => {
    setSortOption(option);
    handleFilterClose();
  };

  // Navigate to employee profile
  const handleEmployeeClick = () => {
    navigate(`/profile`);
  };

  // Filter and sort employees based on the search term and selected options
  const displayedEmployees = filteredEmployees
    .filter(
      (employee) =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.department.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "alphabetical") {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Directory
      </Typography>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search by name, role, department..."
          value={searchTerm}
          onChange={handleSearchChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <FaSearch />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            marginRight: 2,
            backgroundColor: "white",
            borderRadius: 1,
            flexGrow: 1,
          }}
        />
        <IconButton
          color="inherit"
          onClick={handleFilterClick}
          sx={{ position: "sticky", right: 0 }}
        >
          <FaFilter />
        </IconButton>
        <Menu
          anchorEl={filterAnchorEl}
          open={Boolean(filterAnchorEl)}
          onClose={handleFilterClose}
        >
          <MenuItem onClick={() => applyFilterOrSort("alphabetical")}>
            Sort Alphabetically
          </MenuItem>
          <MenuItem onClick={() => applyFilterOrSort("department")}>
            Sort by Department
          </MenuItem>
          {/* Add more filter or sort options as needed */}
        </Menu>
      </Toolbar>

      {/* Main Content Area */}
      <Box sx={{ padding: 2 }}>
        <List>
          {displayedEmployees.map((employee) => (
            <React.Fragment key={employee.id}>
              <ListItem
                button
                onClick={() => handleEmployeeClick()}
                sx={{
                  "&:hover": {
                    backgroundColor: "#f0f0f0",
                    transition: "background-color 0.3s ease",
                  },
                }}
              >
                <Avatar
                  src={employee.avatar}
                  alt={employee.name}
                  sx={{ marginRight: 2 }}
                >
                  {employee.name.charAt(0)}
                </Avatar>
                <ListItemText
                  primary={employee.name}
                  secondary={`${employee.jobTitle} - ${employee.department}`}
                />
                <Chip
                  label={
                    employee.status === "online"
                      ? "Online"
                      : employee.status === "away"
                      ? "Away"
                      : "Offline"
                  }
                  color={
                    employee.status === "online"
                      ? "success"
                      : employee.status === "away"
                      ? "warning"
                      : "default"
                  }
                  sx={{ marginLeft: "auto" }}
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default EmployeeDirectory;
