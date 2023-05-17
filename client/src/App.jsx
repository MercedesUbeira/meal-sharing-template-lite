import React from 'react';
import MealsList from "./MealsList";
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Background from './img/Background.jpg';

function App() {
  return (
    <Router>
      <div className='App' style={{backgroundImage: `url(${Background})`}}>
        <Routes>
          <Route path="/meals" element ={<MealsList />} />
        </Routes>
      </div>
      </Router>
  );
}

export default App
