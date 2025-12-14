import React from 'react'

export default function Recommendations() { return null }

import React from 'react';

export default function Recommendations() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-2">Recommendations</h1>
      <p className="text-gray-700">Personalized recommendations will appear here (placeholder).</p>
      <div className="mt-4 space-y-3">
        <div className="p-4 bg-white rounded shadow-sm">Recommendation 1</div>
        <div className="p-4 bg-white rounded shadow-sm">Recommendation 2</div>
        <div className="p-4 bg-white rounded shadow-sm">Recommendation 3</div>
      </div>
    </div>
  );
}