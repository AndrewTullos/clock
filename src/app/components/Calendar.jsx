"use client";
import React, { useState, useEffect } from "react";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

const days = [
	{ date: "2021-12-27" },
	{ date: "2021-12-28" },
	{ date: "2021-12-29" },
	{ date: "2021-12-30" },
	{ date: "2021-12-31" },
	{ date: "2022-01-01", isCurrentMonth: true },
	{ date: "2022-01-02", isCurrentMonth: true },
	{ date: "2022-01-03", isCurrentMonth: true },
	{ date: "2022-01-04", isCurrentMonth: true },
	{ date: "2022-01-05", isCurrentMonth: true },
	{ date: "2022-01-06", isCurrentMonth: true },
	{ date: "2022-01-07", isCurrentMonth: true },
	{ date: "2022-01-08", isCurrentMonth: true },
	{ date: "2022-01-09", isCurrentMonth: true },
	{ date: "2022-01-10", isCurrentMonth: true },
	{ date: "2022-01-11", isCurrentMonth: true },
	{ date: "2022-01-12", isCurrentMonth: true, isToday: true },
	{ date: "2022-01-13", isCurrentMonth: true },
	{ date: "2022-01-14", isCurrentMonth: true },
	{ date: "2022-01-15", isCurrentMonth: true },
	{ date: "2022-01-16", isCurrentMonth: true },
	{ date: "2022-01-17", isCurrentMonth: true },
	{ date: "2022-01-18", isCurrentMonth: true },
	{ date: "2022-01-19", isCurrentMonth: true },
	{ date: "2022-01-20", isCurrentMonth: true },
	{ date: "2022-01-21", isCurrentMonth: true, isSelected: true },
	{ date: "2022-01-22", isCurrentMonth: true },
	{ date: "2022-01-23", isCurrentMonth: true },
	{ date: "2022-01-24", isCurrentMonth: true },
	{ date: "2022-01-25", isCurrentMonth: true },
	{ date: "2022-01-26", isCurrentMonth: true },
	{ date: "2022-01-27", isCurrentMonth: true },
	{ date: "2022-01-28", isCurrentMonth: true },
	{ date: "2022-01-29", isCurrentMonth: true },
	{ date: "2022-01-30", isCurrentMonth: true },
	{ date: "2022-01-31", isCurrentMonth: true },
	{ date: "2022-02-01" },
	{ date: "2022-02-02" },
	{ date: "2022-02-03" },
	{ date: "2022-02-04" },
	{ date: "2022-02-05" },
	{ date: "2022-02-06" },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Calendar() {
	const [currentDate, setCurrentDate] = useState(new Date());
	const month = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const setMonth = new Date();
	let currentMonth = month[setMonth.getMonth()];

	const year = new Date();
	let currentYear = year.getFullYear();
	return (
		<div>
			<div className="flex items-center ">
				<h2 className="flex-auto text-md font-semibold text-gold ">
					{currentMonth} {currentYear}
				</h2>
				<button
					type="button"
					className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-cream hover:text-gray-200"
				>
					<span className="sr-only">Previous month</span>
					<ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
				</button>
				<button
					type="button"
					className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-cream hover:text-gray-200"
				>
					<span className="sr-only">Next month</span>
					<ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
				</button>
			</div>
			<div className="mt-10 grid grid-cols-7 text-center text-xs leading-6 text-clay">
				<div>M</div>
				<div>T</div>
				<div>W</div>
				<div>T</div>
				<div>F</div>
				<div>S</div>
				<div>S</div>
			</div>
			<div className="mt-2 grid grid-cols-7 text-sm">
				{days.map((day, dayIdx) => (
					<div
						key={day.date}
						className={classNames(
							dayIdx > 6 && "border-t border-green",
							"py-2"
						)}
					>
						<button
							type="button"
							className={classNames(
								day.isSelected && "text-cream",
								!day.isSelected && day.isToday && "text-green",
								!day.isSelected &&
									!day.isToday &&
									day.isCurrentMonth &&
									"text-gray-300",
								!day.isSelected &&
									!day.isToday &&
									!day.isCurrentMonth &&
									"text-cream",
								day.isSelected && day.isToday && "bg-green",
								day.isSelected && !day.isToday && "bg-gray-300",
								!day.isSelected && "hover:bg-gray-200",
								(day.isSelected || day.isToday) && "font-semibold",
								"mx-auto flex h-8 w-8 items-center justify-center rounded-full"
							)}
						>
							<time dateTime={day.date}>
								{day.date.split("-").pop().replace(/^0/, "")}
							</time>
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
