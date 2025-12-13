import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-blue-600">
              Dynamic Learning
            </Link>
            <div className="hidden md:flex md:ml-8 md:space-x-4">
              <Link to="/courses" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Courses</Link>
              <Link to="/recommendations" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Recommendations</Link>
              <Link to="/dashboard" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/profile" className="hidden sm:inline-flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">Profile</Link>
            <Link to="/assessment" className="inline-flex items-center px-3 py-2 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700">Take Assessment</Link>
          </div>
        </div>
      </div>
    </nav>

  );
}
