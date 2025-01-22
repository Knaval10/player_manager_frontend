import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import LandingPage from "./pages/Home";
import Layout from "./components/layout";
import Login from "./pages/Login";
import PlayersProfile from "./pages/PlayersProfile";
const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <LandingPage />
        </Layout>
      ),
    },
    {
      path: "/login",
      element: (
        <Layout>
          <Login />
        </Layout>
      ),
    },
    {
      path: "/playerProfile",
      element: (
        <Layout>
          <PlayersProfile />
        </Layout>
      ),
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default App;
