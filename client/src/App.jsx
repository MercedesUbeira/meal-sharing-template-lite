import React from 'react';
import MealsList from "./components/MealsList/MealsList";
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppWrapper from './components/AppWrapper/AppWrapper'
import Home from './components/Home/Home';
import MexicanFood from './components/Meals/MexicanFood/MexicanFood';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppWrapper><Home /></AppWrapper>,
    },
    {
      path: "/meals",
      element: <AppWrapper><MealsList /></AppWrapper>,
    },
    {
      path: "/meals/2",
      element: <AppWrapper><MexicanFood /></AppWrapper>,
    },
  ])
  return <RouterProvider router={router} />;
}

export default App;
