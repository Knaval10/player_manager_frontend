import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import LandingPage from "./pages/Home";
import Layout from "./components/layout/PublicLayout";
import Login from "./pages/Login";
import PlayersProfile from "./pages/PlayersProfile";
import SignIn from "./pages/Login/signIn";
import RegistrationPage from "./pages/RegistrationPage";
import ProfileForm from "./pages/RegistrationPage/ProfileForm";
import GameDetails from "./pages/GamesDetails";
import PrivateLayout from "./components/layout/PrivateLayout";
const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        // <Layout>
        <LandingPage />
        // </Layout>
      ),
    },
    // {
    //   path: "/login",
    //   element: (
    //     // <Layout>
    //     <Login />
    //     // </Layout>
    //   ),
    // },
    {
      path: "/playerProfile",
      element: (
        // <Layout>
        <PlayersProfile />
        // </Layout>
      ),
    },
    {
      path: "/login",
      element: (
        // <Layout>
        <SignIn />
        // </Layout>
      ),
    },
    {
      path: "/register",
      element: (
        // <Layout>
        <RegistrationPage />
        // </Layout>
      ),
    },
    {
      path: "/profile_form",
      element: (
        // <Layout>
        <ProfileForm />
        // </Layout>
      ),
    },
    {
      path: "/game_details",
      element: (
        <PrivateLayout>
          <GameDetails />
        </PrivateLayout>
      ),
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default App;
