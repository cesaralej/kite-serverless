import React, { useState } from "react";
import { File } from "../types";
import {
  Box,
  Typography,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Grid,
  SelectChangeEvent,
} from "@mui/material";
import Search from "../components/Search";
import FileCard from "../components/FileCard";

const mockFiles: File[] = [
  {
    id: 1,
    name: "Project Proposal.pdf",
    person: "John Doe",
    date: "2024-08-15",
    type: "Document",
  },
  {
    id: 2,
    name: "Budget Report.xlsx",
    person: "Jane Smith",
    date: "2024-08-10",
    type: "Spreadsheet",
  },
  {
    id: 3,
    name: "Team Presentation.pptx",
    person: "John Doe",
    date: "2024-08-01",
    type: "Presentation",
  },
  {
    id: 4,
    name: "Quarterly Results.pdf",
    person: "Jane Smith",
    date: "2024-07-28",
    type: "Document",
  },
];

const FilesPage: React.FC = () => {
  const [person, setPerson] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [fileType, setFileType] = useState<string>("");

  const handlePersonChange = (event: SelectChangeEvent<string>) => {
    setPerson(event.target.value);
  };

  const handleDateChange = (event: SelectChangeEvent<string>) => {
    setDate(event.target.value);
  };

  const handleFileTypeChange = (event: SelectChangeEvent<string>) => {
    setFileType(event.target.value);
  };

  // Filter the files based on the selected filters
  const filteredFiles = mockFiles.filter((file) => {
    return (
      (person === "" || file.person === person) &&
      (date === "" ||
        new Date(file.date).toISOString().slice(0, 10) === date) &&
      (fileType === "" || file.type === fileType)
    );
  });

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Files
      </Typography>
      <Search />

      {/* Filters */}
      <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
        <FormControl variant="outlined" sx={{ minWidth: 120 }}>
          <InputLabel>Person</InputLabel>
          <Select value={person} onChange={handlePersonChange} label="Person">
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value="John Doe">John Doe</MenuItem>
            <MenuItem value="Jane Smith">Jane Smith</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" sx={{ minWidth: 120 }}>
          <InputLabel>Date</InputLabel>
          <Select value={date} onChange={handleDateChange} label="Date">
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value="2024-08-15">Last Week</MenuItem>
            <MenuItem value="2024-08-10">Last Month</MenuItem>
            <MenuItem value="2024-08-01">Last Year</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" sx={{ minWidth: 120 }}>
          <InputLabel>File Type</InputLabel>
          <Select
            value={fileType}
            onChange={handleFileTypeChange}
            label="File Type"
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value="Document">Document</MenuItem>
            <MenuItem value="Spreadsheet">Spreadsheet</MenuItem>
            <MenuItem value="Presentation">Presentation</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Display Files */}
      <Grid container spacing={2}>
        {filteredFiles.length > 0 ? (
          filteredFiles.map((file) => <FileCard key={file.id} {...file} />)
        ) : (
          <Typography variant="body1" sx={{ mt: 2 }}>
            No files match the selected filters.
          </Typography>
        )}
      </Grid>
    </>
  );
};

export default FilesPage;
