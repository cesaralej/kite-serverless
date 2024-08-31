import React from "react";
import { Box, Typography, Divider, Button } from "@mui/material";
import { FaPhoneAlt, FaEnvelope, FaVideo, FaLinkedin } from "react-icons/fa";
import { HiUserCircle } from "react-icons/hi";

// Define the type for the props
interface EmployeeProfilePageProps {
  employee: {
    name: string;
    profilePicture: string;
    email: string;
    jobTitle: string;
    department: string;
    location: string;
    yearsAtCompany: number;
    manager: {
      name: string;
      email: string;
    };
    status: string;
    workingHours: string;
    interests?: string[];
  };
  onStartChat: () => void;
  onRequestMeeting: () => void;
  onAssignTask: () => void;
  onViewLinkedProfiles: () => void;
  onShareProfile: () => void;
  onSendFeedback: () => void;
}

const EmployeeProfile: React.FC<EmployeeProfilePageProps> = ({
  employee,
  onStartChat,
  onRequestMeeting,
  onAssignTask,
  onViewLinkedProfiles,
  onShareProfile,
  onSendFeedback,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
        backgroundColor: "#f4f4f4",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={() => window.history.back()} // Navigate back to the previous page
        sx={{ mb: 2 }}
      >
        Back
      </Button>
      {/* Profile Picture */}
      <Box
        sx={{
          width: 120,
          height: 120,
          borderRadius: "50%",
          overflow: "hidden",
          border: "2px solid #ccc",
          mb: 2,
        }}
      >
        <img
          src={employee.profilePicture}
          alt="Profile"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>

      {/* Basic Information */}
      <Typography variant="h6" sx={{ mb: 1 }}>
        {employee.name}
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
        <FaEnvelope style={{ marginRight: 4 }} />
        {employee.email}
      </Typography>

      {/* Job Details */}
      <Divider sx={{ my: 2, width: "100%" }} />
      <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
        <strong>Job Title:</strong> {employee.jobTitle}
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
        <strong>Department:</strong> {employee.department}
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
        <strong>Location:</strong> {employee.location}
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
        <strong>Years at Company:</strong> {employee.yearsAtCompany}
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
        <strong>Manager:</strong> {employee.manager.name} -{" "}
        <a href={`mailto:${employee.manager.email}`}>
          {employee.manager.email}
        </a>
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
        <strong>Status:</strong> {employee.status}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        <strong>Working Hours:</strong> {employee.workingHours}
      </Typography>

      {/* Interests and Hobbies */}
      {employee.interests && (
        <>
          <Divider sx={{ my: 2, width: "100%" }} />
          <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
            <strong>Interests:</strong> {employee.interests.join(", ")}
          </Typography>
        </>
      )}

      {/* Actions */}
      <Divider sx={{ my: 2, width: "100%" }} />
      <Box sx={{ width: "100%" }}>
        <Button
          fullWidth
          variant="outlined"
          sx={{ mb: 1 }}
          onClick={onStartChat}
          startIcon={<FaPhoneAlt />}
        >
          Start Chat
        </Button>
        <Button
          fullWidth
          variant="outlined"
          sx={{ mb: 1 }}
          onClick={onRequestMeeting}
          startIcon={<FaVideo />}
        >
          Request Meeting
        </Button>
        <Button
          fullWidth
          variant="outlined"
          sx={{ mb: 1 }}
          onClick={onAssignTask}
          startIcon={<HiUserCircle />}
        >
          Send Follow-Up Task
        </Button>
        <Button
          fullWidth
          variant="outlined"
          sx={{ mb: 1 }}
          onClick={onViewLinkedProfiles}
          startIcon={<FaLinkedin />}
        >
          View Linked Profiles
        </Button>
        <Button
          fullWidth
          variant="outlined"
          sx={{ mb: 1 }}
          onClick={onShareProfile}
        >
          Share Profile
        </Button>
        <Button
          fullWidth
          variant="outlined"
          color="error"
          onClick={onSendFeedback}
          startIcon={<FaLinkedin />}
        >
          Send Feedback
        </Button>
      </Box>
    </Box>
  );
};

const EmployeeProfilePage: React.FC = () => {
  const mockEmployee = {
    name: "Jane Smith",
    profilePicture: "https://via.placeholder.com/120",
    email: "jane.smith@example.com",
    jobTitle: "Senior Developer",
    department: "Engineering",
    location: "Remote",
    yearsAtCompany: 5,
    manager: {
      name: "John Doe",
      email: "john.doe@example.com",
    },
    status: "Available",
    workingHours: "9 AM - 5 PM EST",
    interests: ["Coding", "Reading", "Hiking"],
  };

  const handleStartChat = () => console.log("Starting chat...");
  const handleRequestMeeting = () => console.log("Requesting meeting...");
  const handleAssignTask = () => console.log("Assigning task...");
  const handleViewLinkedProfiles = () =>
    console.log("Viewing linked profiles...");
  const handleShareProfile = () => console.log("Sharing profile...");
  const handleSendFeedback = () => console.log("Sending feedback...");

  return (
    <EmployeeProfile
      employee={mockEmployee}
      onStartChat={handleStartChat}
      onRequestMeeting={handleRequestMeeting}
      onAssignTask={handleAssignTask}
      onViewLinkedProfiles={handleViewLinkedProfiles}
      onShareProfile={handleShareProfile}
      onSendFeedback={handleSendFeedback}
    />
  );
};

export default EmployeeProfilePage;
