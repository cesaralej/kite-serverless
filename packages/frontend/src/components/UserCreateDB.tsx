import React, { useState } from "react";
import { API } from "aws-amplify";

const mockuser = {
  identityId: "Cesar",
  email: "cesar@comkite.com",
  name: "Cesar Garcia",
  profilePicture: "https://example.com/profile.jpg",
  role: "CTO",
  department: "Executive",
};

const CreateUser = () => {
  // State to hold the input values for user creation
  const [identityId, setIdentityId] = useState(mockuser.identityId);
  const [email, setEmail] = useState(mockuser.email);
  const [name, setName] = useState(mockuser.name);
  const [profilePicture, setProfilePicture] = useState(
    "https://example.com/profile.jpg"
  );
  const [role, setRole] = useState(mockuser.role);
  const [department, setDepartment] = useState(mockuser.department);
  const [responseMessage, setResponseMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const data = {
      identityId,
      email,
      name,
      profilePicture,
      role,
      department,
    };

    try {
      return API.post("connections", "/connections", {
        body: data,
      });
    } catch (error) {
      setResponseMessage("Error creating user. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>Create New User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Identity ID:</label>
          <input
            type="text"
            value={identityId}
            onChange={(e) => setIdentityId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Profile Picture (URL):</label>
          <input
            type="text"
            value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
          />
        </div>
        <div>
          <label>Role:</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <div>
          <label>Department:</label>
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </div>
        <button type="submit">Create User</button>
      </form>

      {/* Display response message */}
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default CreateUser;
