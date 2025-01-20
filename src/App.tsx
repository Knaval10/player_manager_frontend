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
  ]);
  return <RouterProvider router={routes} />;
};

export default App;
