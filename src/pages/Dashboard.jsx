import React from 'react'

export default function Dashboard() { return null }

import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <div className="p-10">

      
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-gray-900 mb-6"
      >
        Your Learning Dashboard
      </motion.h1>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

  
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 bg-white shadow rounded-xl"
        >
          <h2 className="text-xl font-semibold">Current Level</h2>
          <p className="text-3xl font-bold text-indigo-600 mt-2">Intermediate</p>
          <p className="text-gray-500 text-sm mt-1">Based on assessments</p>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-6 bg-white shadow rounded-xl"
        >
          <h2 className="text-xl font-semibold">Courses Completed</h2>
          <p className="text-3xl font-bold text-green-600 mt-2">06</p>
          <p className="text-gray-500 text-sm mt-1">Great progress!</p>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-6 bg-white shadow rounded-xl"
        >
          <h2 className="text-xl font-semibold">Active Learning Path</h2>
          <p className="text-3xl font-bold text-purple-600 mt-2">Web Dev</p>
          <p className="text-gray-500 text-sm mt-1">3 modules remaining</p>
        </motion.div>

      </div>

      
      <div className="mt-12 bg-white shadow rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4">Your Progress</h2>

        <div className="w-full bg-gray-200 rounded-full h-4">
          <div className="bg-indigo-600 h-4 rounded-full" style={{ width: "65%" }}></div>
        </div>

        <p className="mt-3 text-gray-700 font-medium">65% Completed</p>
      </div>


      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Recommended For You</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="p-5 bg-white shadow rounded-xl">
            <h3 className="text-lg font-bold">Advanced React Concepts</h3>
            <p className="text-gray-600 mt-2">Boost your React skills to the next level.</p>
            <a href="/courses/react-advanced" className="text-indigo-600 font-semibold mt-3 inline-block">
              View Course →
            </a>
          </div>

          <div className="p-5 bg-white shadow rounded-xl">
            <h3 className="text-lg font-bold">Data Structures</h3>
            <p className="text-gray-600 mt-2">Strengthen your problem-solving skills.</p>
            <a href="/courses/dsa" className="text-indigo-600 font-semibold mt-3 inline-block">
              View Course →
            </a>
          </div>

          <div className="p-5 bg-white shadow rounded-xl">
            <h3 className="text-lg font-bold">Node.js Essentials</h3>
            <p className="text-gray-600 mt-2">Learn backend development foundations.</p>
            <a href="/courses/nodejs" className="text-indigo-600 font-semibold mt-3 inline-block">
              View Course →
            </a>
          </div>

        </div>
      </div>

    </div>
  );
}
