import React from "react";
import MealsList from "./components/MealsList/MealsList";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppWrapper from "./components/Shared/AppWrapper/AppWrapper";
import Home from "./components/Home/Home";
import IndividualMeals from "./components/Meals/IndividualMeal";
import NavBar from "./components/Shared/NavBar/NavBar";
import About from "./components/About/About";
import BecomeAHost from "./components/BecomeAHost/BecomeAHost";
import Footer from "./components/Shared/Footer/Footer";
import NewMealForm from "./components/BecomeAHost/NewMealForm/NewMealForm";

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
        <>
          <NavBar />
          <MealsList />
          <Footer />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <div className="app-container">
          <NavBar />
          <About />
          <Footer />
        </div>
      ),
    },
    {
      path: "/meals/:mealID",
      element: (
        <div className="app-container">
          <AppWrapper>
            <NavBar />
            <IndividualMeals />
          </AppWrapper>
          <Footer />
        </div>
      ),
    },
    {
      path: "/BecomeAHost",
      element: (
        <div className="app-container">
          <NavBar />
          <BecomeAHost/>
          <Footer />
        </div>
      ),
    },
    // {
    //   path: "/succes",
    //   element: (
    //     <AppWrapper>
    //     <NavBar/>
    //     <Reservations/>
    //     </AppWrapper>
    //   ),
    // },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
