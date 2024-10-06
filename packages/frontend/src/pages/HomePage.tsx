import { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
//import Spinner from "../components/Spinner";
import WelcomeMessage from "../components/Homepage/WelcomeMessage";
import CompanyAnnouncements from "../components/Homepage/CompanyAnnouncements";
import TaskManagement from "../components/Homepage/TaskManagment";
import EventsCard from "../components/Homepage/EventsCard";
import EmployeeHighlights from "../components/Homepage/EmployeeHighlights";
import SocialAndCulturalUpdates from "../components/Homepage/SocialAndCulturalUpdates";
import HealthAndWellness from "../components/Homepage/HealthAndWellness";
import LearningAndDevelopment from "../components/Homepage/LearningAndDevelopment";
import InspirationalStories from "../components/Homepage/InspirationalStories";
import PulseCheck from "../components/Homepage/PulseCheck";
import WebSocketTest from "../components/WebSocketTest";
import UserCreateDB from "../components/UserCreateDB";

const Home = () => {
  const [name, setName] = useState<string | null>(null);

  const handlePulseCheckSubmit = (data: {
    mood: string;
    stress: string;
    energy: string;
  }) => {
    console.log("Pulse check data:", data);
    // Send the data to a backend server or store it locally
  };
  useEffect(() => {
    async function fetchUserAttributes() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        const attributes = user.attributes;

        // Replace "name" with your specific attribute key if it's custom
        const userName = attributes["name"];

        setName(userName);
      } catch (error) {
        console.error("Error fetching user attributes:", error);
      }
    }

    fetchUserAttributes();
  }, []);

  return (
    <>
      {/* Main body content */}
      <WelcomeMessage name={name} />
      <WebSocketTest />
      <UserCreateDB />
      <CompanyAnnouncements />
      <TaskManagement />
      <EventsCard />
      <EmployeeHighlights />
      <SocialAndCulturalUpdates />
      <HealthAndWellness />
      <PulseCheck onSubmit={handlePulseCheckSubmit} />
      <LearningAndDevelopment />
      <InspirationalStories />
    </>
  );
};

export default Home;
