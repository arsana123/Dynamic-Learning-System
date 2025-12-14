import React from 'react'

export default function Profile() { return null }

import React from 'react';

export default function Profile() {
	return (
		<div className="p-8">
			<h1 className="text-2xl font-semibold mb-2">Your Profile</h1>
			<p className="text-gray-700">This is a minimal profile placeholder. Add user info and settings here.</p>
			<div className="mt-4 bg-white p-4 rounded shadow-sm">
				<p className="text-sm text-gray-600">Name: —</p>
				<p className="text-sm text-gray-600">Email: —</p>
			</div>
		</div>
	);
}
