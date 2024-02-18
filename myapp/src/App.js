import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Registration from "./components/Registration";
import Rooms from "./components/Rooms"; // Import the Rooms component

function App() {
  return (
   <div>
     <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/rooms" element={<Rooms/>} /> {/* Use the Rooms component in the route */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
