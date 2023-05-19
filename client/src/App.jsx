import React from "react";
import MealsList from "./components/MealsList/MealsList";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppWrapper from "./components/Shared/AppWrapper/AppWrapper";
import Home from "./components/Home/Home";
import IndividualMeals from "./components/Meals/IndividualMeal";
import NavBar from "./components/Shared/NavBar/NavBar";
import About from "./components/About/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <AppWrapper>
          <Home />
        </AppWrapper>
      ),
    },
    {
      path: "/meals",
      element: (
        <AppWrapper>
          <NavBar />
          <MealsList />
        </AppWrapper>
      ),
    },
    {
      path: "/about",
      element: (
        <>       
        <NavBar/>
        <About/>
        </>
      ),
    },
    {
      path: "/meals/:mealID",
      element: (
        <AppWrapper>
          <NavBar />
          <IndividualMeals />
        </AppWrapper>
      ),
    },
    {
      path: "/reservation",
      element: (
        <>       
        <NavBar/>
        </>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
