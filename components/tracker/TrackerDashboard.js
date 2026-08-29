"use client";

import { useState } from "react";
import Heatmap from "./Heatmap";
import StatCard from "./StatCard";
import TrackerCard from "./TrackerCard";
import TrackerControls from "./TrackerControls";
import TrendChart from "./TrendChart";

const chartData = {
    "4W": [24, 29, 21, 34],
    "12W": [24, 29, 21, 34, 31, 38, 35, 42, 37, 44, 40, 46],
    "6M": [18, 25, 22, 31, 28, 36, 33, 40, 37, 43, 39, 46],
    "1Y": [14, 20, 18, 24, 22, 29, 26, 34, 31, 38, 35, 42],
};

const stats = [
    { label: "Deep Work Sessions", value: "142", accent: true },
    { label: "Books Read YTD", value: "18" },
    { label: "Resting Heart Rate", value: "54", unit: "BPM" },
    { label: "Current Streak", value: "12", unit: "DAYS" },
];

export default function TrackerDashboard() {
    const [range, setRange] = useState("1Y");

    return (
        <>
            <TrackerControls range={range} onRangeChange={setRange} />
            <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-12 lg:gap-5">
                <div className="lg:col-span-4">
                    <TrackerCard />
                </div>
                <div className="flex min-w-0 flex-col gap-4 lg:col-span-8 lg:gap-5">
                    <Heatmap />
                    <TrendChart values={chartData[range]} range={range} />
                </div>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 lg:col-span-12">
                    {stats.map((stat) => <StatCard key={stat.label} {...stat} />)}
                </div>
            </div>
        </>
    );
}
