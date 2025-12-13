import React from "react";

export default function ProgressChart({ percent = 0, size = 100, stroke = 8 }) {
	const radius = (size - stroke) / 2;
	const circumference = 2 * Math.PI * radius;
	const offset = circumference - (percent / 100) * circumference;

	return (
		<svg
			width={size}
			height={size}
			viewBox={`0 0 ${size} ${size}`}
			role="img"
			aria-label={`Progress ${percent} percent`}
		>
			<g transform={`translate(${size / 2}, ${size / 2})`}>
				<circle
					r={radius}
					fill="transparent"
					stroke="#e6e6e6"
					strokeWidth={stroke}
				/>
				<circle
					r={radius}
					fill="transparent"
					stroke="#2563eb"
					strokeWidth={stroke}
					strokeLinecap="round"
					strokeDasharray={`${circumference} ${circumference}`}
					strokeDashoffset={offset}
					transform="rotate(-90)"
				/>

				<text
					x="0"
					y="6"
					textAnchor="middle"
					className="text-sm"
					style={{ fontSize: Math.max(12, size * 0.18), fill: "#0f172a" }}
				>
					{percent}%
				</text>
			</g>
		</svg>
	);
}
