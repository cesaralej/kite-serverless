import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/LoginPage";
import Home from "./pages/HomePage";
import ChatsPage from "./pages/ChatsPage";
import ChatPage, { chatLoader } from "./pages/ChatPage";
import ProfilePage from "./pages/ProfilePage";
import Tasks from "./pages/TasksPage";
import NewTaskPage from "./pages/NewTaskPage";
import FilesPage from "./pages/FilesPage";
import DirectoryPage from "./pages/DirectoryPage";
import LearningResourcesPage from "./pages/LearningResourcesPage";
import NotFoundPage from "./pages/NotFoundPage";
import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState, useEffect } from "react";
import { AppContext, AppContextType } from "./lib/contextLib";
import { Auth } from "aws-amplify";
import { onError } from "./lib/errorLib";

const App: React.FC = () => {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    } catch (error) {
      if (error !== "No current user") {
        onError(error);
      }
    }

    setIsAuthenticating(false);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="chats"
            element={
              <ProtectedRoute>
                <ChatsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="chats/:chatId"
            element={
              <ProtectedRoute>
                <ChatPage />
              </ProtectedRoute>
            }
            loader={chatLoader}
          />
          <Route
            path="tasks"
            element={
              <ProtectedRoute>
                <Tasks />
              </ProtectedRoute>
            }
          />
          <Route
            path="tasks/new"
            element={
              <ProtectedRoute>
                <NewTaskPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="files"
            element={
              <ProtectedRoute>
                <FilesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="directory"
            element={
              <ProtectedRoute>
                <DirectoryPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="learn"
            element={
              <ProtectedRoute>
                <LearningResourcesPage />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </>
    )
  );

  return (
    !isAuthenticating && (
      <AppContext.Provider
        value={{ isAuthenticated, userHasAuthenticated } as AppContextType}
      >
        <RouterProvider router={router} />
      </AppContext.Provider>
    )
  );
};

export default App;
