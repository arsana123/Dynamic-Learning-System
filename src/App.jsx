// React Frontend Structure for Dynamic Learning Path Recommendation System
// This file acts as the root App.jsx with routing

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
// import Courses from './pages/Courses';
//import Recommendations from './pages/Recommendations';
//import Profile from './pages/Profile';

export default function App() {
  return (
    <>
      <Home/>
      <Dashboard/>
      <h1>abcd</h1>
    </>
  );
}


