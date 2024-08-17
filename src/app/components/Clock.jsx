"use client";

import React, { useState } from "react";

function Clock() {
	const time = new Date().toLocaleTimeString();
	const [currentTime, setCurrentTime] = useState(time);

	const updateTime = () => {
		const time = new Date().toLocaleTimeString();
		setCurrentTime(time);
	};

	setInterval(updateTime, 1000);

	return (
		<div>
			<h1 className="text-green mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
				{currentTime}
			</h1>
		</div>
	);
}

export default Clock;
