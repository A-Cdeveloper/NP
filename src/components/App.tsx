import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from "../pages/Error";
import HomePage from "../pages/HomePage";
import Post from "../pages/Post";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "blog/:post_title", element: <Post /> },
    ],
  },
]);

export const App = () => <RouterProvider router={router} />;
