import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="p-10">

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-900 mb-4"
      >
        Welcome to Dynamic Learning Path
      </motion.h1>

      {/* Intro Paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-lg text-gray-700 max-w-2xl"
      >
        Our system analyzes your skills, learning goals, and performance to build a personalized learning journey tailored just for you.
      </motion.p>

      {/* Start Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-8"
      >
        <a
          href="/dashboard"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
        >
          Start Your Learning Path
        </a>
      </motion.div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        
        <div className="p-6 bg-white shadow rounded-xl">
          <h2 className="text-xl font-bold mb-2">Personalized Learning</h2>
          <p className="text-gray-600">AI-based recommendations created just for you.</p>
        </div>

        <div className="p-6 bg-white shadow rounded-xl">
          <h2 className="text-xl font-bold mb-2">Skill-Based Courses</h2>
          <p className="text-gray-600">Choose from beginner to advanced level courses.</p>
        </div>

        <div className="p-6 bg-white shadow rounded-xl">
          <h2 className="text-xl font-bold mb-2">Track Your Growth</h2>
          <p className="text-gray-600">Visual progress tracking to measure improvements.</p>
        </div>

      </div>
    </div>
  );
}
