import React from "react";

export default function RecommendationCard({ course }) {
	const { title, description, level, link, score } = course;
	const percent = Math.round((score || 0) * 100);

	return (
		<article className="p-4 bg-white rounded-lg shadow-sm flex flex-col justify-between">
			<div>
				<h3 className="text-lg font-medium text-gray-900">{title}</h3>
				<p className="text-sm text-gray-600 mt-2">{description}</p>
			</div>

			<div className="mt-4 flex items-center justify-between">
				<div className="flex items-center gap-3">
					<span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{level}</span>
					<span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">Match {percent}%</span>
				</div>

				<a
					href={link}
					className="text-sm font-semibold text-blue-600 hover:underline"
					aria-label={`View course ${title}`}
				>
					View →
				</a>
			</div>
		</article>
	);
}
