import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            Dynamic
          </Link>
          <div className="space-x-4">
            <Link to="/courses" className="text-gray-700 hover:text-gray-900">
              Courses
            </Link>
            <Link
              to="/recommendations"
              className="text-gray-700 hover:text-gray-900"
            >
              Recommendations
            </Link>
            <Link to="/profile" className="text-gray-700 hover:text-gray-900">
              Profile
            </Link>
          </div>
        </div>
      </nav>
  )
}
