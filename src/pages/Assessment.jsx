import React from 'react'

export default function Assessment() { return null }

import { useState } from "react";

export default function Assessment() {
	const [started, setStarted] = useState(false);

	return (
		<div className="p-8">
			<h1 className="text-2xl font-semibold mb-4">Assessment</h1>

			{!started ? (
				<div className="max-w-xl bg-white p-6 rounded-lg shadow-sm">
					<p className="text-gray-700">This short assessment helps us personalize your learning path. It takes about 5 minutes.</p>
					<div className="mt-4">
						<button
							onClick={() => setStarted(true)}
							className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
						>
							Start Assessment
						</button>
					</div>
				</div>
			) : (
				<div className="max-w-2xl bg-white p-6 rounded-lg shadow-sm">
					<p className="text-gray-700">Assessment in progress — (placeholder)</p>
					<div className="mt-4">
						<button
							onClick={() => setStarted(false)}
							className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300"
						>
							Cancel
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
