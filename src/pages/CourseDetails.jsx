import React from 'react'

export default function CourseDetails() { return null }

import React from 'react';
import { useParams } from 'react-router-dom';

export default function CourseDetails() {
	const { id } = useParams();

	return (
		<div className="p-8">
			<h1 className="text-2xl font-semibold mb-2">Course Details</h1>
			<p className="text-gray-700">Displaying details for course: <strong>{id || 'unknown'}</strong></p>
			<div className="mt-4 bg-white p-4 rounded shadow-sm">
				<p className="text-sm text-gray-600">This is a minimal placeholder page. Replace with real data fetching and UI.</p>
			</div>
		</div>
	);
}
