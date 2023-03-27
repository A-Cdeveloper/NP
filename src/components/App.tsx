import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from "../pages/Error";
import HomePage from "../pages/HomePage";
import NewPost from "../pages/NewPost";
import Post from "../pages/Post";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "blog/:post_id", element: <Post /> },
      { path: "blog/new", element: <NewPost /> },
    ],
  },
]);

export const App = () => <RouterProvider router={router} />;
