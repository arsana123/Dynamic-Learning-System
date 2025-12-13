// React Frontend Structure for Dynamic Learning Path Recommendation System
// This file acts as the root App.jsx with routing

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import Recommendations from './pages/Recommendations';
import Profile from './pages/Profile';
import CourseDetails from './pages/CourseDetails';
import Assessment from './pages/Assessment';

export default function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-64px)] bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/assessment" element={<Assessment />} />
        </Routes>
      </div>
    </>
  );
}


