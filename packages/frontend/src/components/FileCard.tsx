import React from "react";
import { File } from "../types";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { FaFilePdf, FaImage, FaVideo, FaFileAlt } from "react-icons/fa";

const getFileIcon = (fileType: string) => {
  switch (fileType) {
    case "pdf":
      return <FaFilePdf />;
    case "image":
      return <FaImage />;
    case "video":
      return <FaVideo />;
    default:
      return <FaFileAlt />;
  }
};

const FileCard: React.FC<File> = ({ id, name, person, date, type }) => {
  const handleClick = () => {
    const fileUrl = `/files/${id}`;
    console.log(fileUrl);
    // navigate(fileUrl); // Uncomment and add `useNavigate` if navigation is needed
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        variant="outlined"
        sx={{
          display: "flex",
          alignItems: "center",
          padding: 2,
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        <CardContent
          sx={{ flex: 1, display: "flex", alignItems: "center", gap: 2 }}
        >
          {getFileIcon(type)}
          <div>
            <Typography variant="h6" component="div">
              {name}
            </Typography>
            <Typography color="textSecondary">Uploaded by: {person}</Typography>
            <Typography color="textSecondary">Date: {date}</Typography>
            <Typography color="textSecondary">Type: {type}</Typography>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default FileCard;
