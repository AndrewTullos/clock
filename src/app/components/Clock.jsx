"use client";
import React from "react";

function Clock() {
	const time = new Date().toLocaleTimeString();
	return (
		<div>
			<h1>{time}</h1>
		</div>
	);
}

export default Clock;
