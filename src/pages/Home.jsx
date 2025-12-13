// import { motion } from "framer-motion";

// export default function Home() {
//   return (
//     <main className="p-8 lg:p-12">
//       <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//         <div>
//           <motion.h1
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
//           >
//             Learn faster with a personalized learning path
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="mt-4 text-gray-700 max-w-xl"
//           >
//             We combine assessments, goals, and course performance to recommend the optimal sequence of modules for you — track progress and get smarter suggestions every week.
//           </motion.p>

//           <div className="mt-6 flex flex-col sm:flex-row gap-3">
//             <a
//               href="/dashboard"
//               className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-white font-semibold shadow hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
//             >
//               Get Started
//             </a>

//             <a
//               href="/courses"
//               className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-5 py-3 text-gray-700 font-medium hover:bg-gray-50"
//             >
//               Browse Courses
//             </a>
//           </div>

//           <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
//             <li>• Tailored module ordering</li>
//             <li>• Strength-based recommendations</li>
//             <li>• Visual progress and milestones</li>
//             <li>• Bite-sized, focused modules</li>
//           </ul>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.98 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.15 }}
//           className="w-full h-56 md:h-72 lg:h-80 bg-gradient-to-tr from-blue-50 to-white rounded-xl shadow flex items-center justify-center"
//           aria-hidden
//         >
//           <div className="text-center text-blue-700">
//             <svg className="mx-auto mb-2" width="84" height="84" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M12 2v10l3 2" stroke="#1e40af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//               <circle cx="12" cy="12" r="9" stroke="#93c5fd" strokeWidth="1.5" />
//             </svg>
//             <p className="font-semibold">Personalized plans</p>
//             <p className="text-xs">Start with a short assessment</p>
//           </div>
//         </motion.div>
//       </section>

//       <section className="mt-10">
//         <h2 className="text-2xl font-semibold text-gray-900">Why Dynamic Learning?</h2>

//         <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           <div className="p-4 bg-white rounded-lg shadow-sm">
//             <h3 className="font-semibold">Adaptive Recommendations</h3>
//             <p className="text-sm text-gray-600 mt-2">Recommendations evolve as you complete modules and improve.</p>
//           </div>

//           <div className="p-4 bg-white rounded-lg shadow-sm">
//             <h3 className="font-semibold">Microlearning Modules</h3>
//             <p className="text-sm text-gray-600 mt-2">Short, focused lessons that fit into your schedule.</p>
//           </div>

//           <div className="p-4 bg-white rounded-lg shadow-sm">
//             <h3 className="font-semibold">Progress Tracking</h3>
//             <p className="text-sm text-gray-600 mt-2">Visualize strengths, gaps, and growth over time.</p>
//           </div>

//           <div className="p-4 bg-white rounded-lg shadow-sm">
//             <h3 className="font-semibold">Expert-Curated Paths</h3>
//             <p className="text-sm text-gray-600 mt-2">Paths designed by educators and industry experts.</p>
//           </div>

//           <div className="p-4 bg-white rounded-lg shadow-sm">
//             <h3 className="font-semibold">Assessments & Badges</h3>
//             <p className="text-sm text-gray-600 mt-2">Earn badges as you demonstrate mastery.</p>
//           </div>

//           <div className="p-4 bg-white rounded-lg shadow-sm">
//             <h3 className="font-semibold">Community Support</h3>
//             <p className="text-sm text-gray-600 mt-2">Join study groups and share progress with peers.</p>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-4">
            Dynamic Learning Path Recommendation System
          </h1>
          <p className="text-gray-600 text-lg">
            Personalized learning. Smarter recommendations. Better outcomes.
          </p>
        </div>

        {/* Problem Statement */}
        <div className="bg-indigo-50 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
            Problem Statement
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Learning paths often fail to adapt to individual student needs and progress.
            A dynamic recommendation system is required to tailor learning experiences
            and suggest relevant courses and resources.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="rounded-xl border p-5 hover:shadow-md transition">
            <h3 className="font-semibold text-lg text-indigo-600 mb-2">
              Personalized Paths
            </h3>
            <p className="text-gray-600 text-sm">
              Learning paths adapt in real-time based on student performance and goals.
            </p>
          </div>
          <div className="rounded-xl border p-5 hover:shadow-md transition">
            <h3 className="font-semibold text-lg text-indigo-600 mb-2">
              Smart Recommendations
            </h3>
            <p className="text-gray-600 text-sm">
              AI-driven suggestions for courses, videos, and practice resources.
            </p>
          </div>
          <div className="rounded-xl border p-5 hover:shadow-md transition">
            <h3 className="font-semibold text-lg text-indigo-600 mb-2">
              Progress Tracking
            </h3>
            <p className="text-gray-600 text-sm">
              Visual insights into strengths, weaknesses, and learning progress.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-xl border border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 transition">
            View Demo
          </button>
        </div>
      </div>
    </div>
  );
}
