import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Signup from './components/Signup';
import QuestionnaireForm from './components/QuestionnaireForm';
import Navbar from './components/Navbar'; // Adjust if in subfolder
import ResourceList from './components/Resourcelist';
 // Import the ResourceList component

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Include Navbar in the app */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/form" element={<QuestionnaireForm />} />
        <Route path="/resources" element={<ResourceList />} /> {/* Add the /resources route */}
      </Routes>
    </Router>
  );
};

export default App;
