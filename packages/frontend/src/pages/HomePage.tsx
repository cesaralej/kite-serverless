//import Spinner from "../components/Spinner";
import WelcomeMessage from "../components/Homepage/WelcomeMessage";
import CompanyAnnouncements from "../components/Homepage/CompanyAnnouncements";
import TaskManagement from "../components/Homepage/TaskManagment";
import EventsCard from "../components/Homepage/EventsCard";
import EmployeeHighlights from "../components/Homepage/EmployeeHighlights";
import SocialAndCulturalUpdates from "../components/Homepage/SocialAndCulturalUpdates";
import QuickLinks from "../components/Homepage/QuickLinks";
import TeamAndDepartmentUpdates from "../components/Homepage/TeamAndDepartmentUpdates";
import HealthAndWellness from "../components/Homepage/HealthAndWellness";
import NotificationsSummary from "../components/Homepage/NotificationsSummary";
import LearningAndDevelopment from "../components/Homepage/LearningAndDevelopment";
import InspirationalStories from "../components/Homepage/InspirationalStories";

const Home = () => {
  const userName = "Cesar";

  return (
    <>
      {/* Main body content */}
      <WelcomeMessage name={userName} />
      <CompanyAnnouncements />
      <TaskManagement />
      <EventsCard />
      <EmployeeHighlights />
      <SocialAndCulturalUpdates />
      <QuickLinks />
      <TeamAndDepartmentUpdates />
      <HealthAndWellness />
      <NotificationsSummary />
      <LearningAndDevelopment />
      <InspirationalStories />
    </>
  );
};

export default Home;
