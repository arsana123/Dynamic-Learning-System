import React from 'react'

export default function Courses() { return null }

import React from 'react';

export default function Courses() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-2">Courses</h1>
      <p className="text-gray-700">Browse available courses (placeholder).</p>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded shadow-sm">Course A</div>
        <div className="p-4 bg-white rounded shadow-sm">Course B</div>
        <div className="p-4 bg-white rounded shadow-sm">Course C</div>
      </div>
    </div>
  );
}