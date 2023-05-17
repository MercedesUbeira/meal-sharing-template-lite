import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";

function App() {
  //Create your routes
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: "/hyf",
      element: <div>Hack Your Future = AWESOME</div>,
    },
    {
      path: "/test",
      element: <TestComponent />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
