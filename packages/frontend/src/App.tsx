import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/LoginPage";
import Home from "./pages/HomePage";
//import ChatsPage from "./pages/ChatsPage";
//import ChatPage, { chatLoader } from "./pages/ChatPage";
//import Tasks from "./pages/TasksPage";
import NotFoundPage from "./pages/NotFoundPage";
import MainLayout from "./layouts/MainLayout";
//import FilesPage from "./pages/FilesPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState, useEffect } from "react";

// Placeholder authentication function
const useAuth = () => {
  // Replace with your actual authentication logic
  const [user, setUser] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate authentication check
    setTimeout(() => {
      setUser("sampleUser"); // Simulate authenticated user
      setLoading(false);
    }, 1000);
  }, []);

  return [user, loading, error] as [string | null, boolean, string | null];
};

const App: React.FC = () => {
  const [user, loading, error] = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Optional: show a loading spinner
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <ProtectedRoute user={user}>
                <Home />
              </ProtectedRoute>
            }
          />
          {/*<Route
            path="chats"
            element={
              <ProtectedRoute user={user}>
                <ChatsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="chats/:chatId"
            element={
              <ProtectedRoute user={user}>
                <ChatPage />
              </ProtectedRoute>
            }
            loader={chatLoader}
          />
          <Route
            path="tasks"
            element={
              <ProtectedRoute user={user}>
                <Tasks />
              </ProtectedRoute>
            }
          />
          <Route
            path="files"
            element={
              <ProtectedRoute user={user}>
                <FilesPage />
              </ProtectedRoute>
            }
          /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
