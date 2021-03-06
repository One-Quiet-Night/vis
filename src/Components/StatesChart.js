import React from "react";

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceLine, ReferenceArea } from 'recharts';
import CustomChartTooltip from "./CustomChartTooltip";
import config from "../config.json"

const StatesChart = ( props ) => {
    let { onStateId, allStatesData, yMax } = props;

    let plotData = allStatesData.map(function(d) {
        return { date: d.dates, cases: d[onStateId] };
    })

    let yDomain = Math.ceil((yMax*1.7)/1000) * 1000;

    return (
        <div className="forecast">
            <LineChart width={600} height={400} data={plotData} margin={{ top: 10, right: 40, bottom: 40, left: 5 }}>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" vertical={false} />
                <XAxis dataKey="date" fontSize="10" axisLine={false} tickLine={false}  />
                <YAxis fontSize="10" axisLine={false} tickLine={false} domain={[0, yDomain]} />
                <ReferenceLine x="2020-01-25" stroke="#EE3E23" strokeDasharray="4 4" label={{ position: "bottom", value: "First case in US", fontSize: "12", fill:"#EE3E23", offset: 20  }} />
                <ReferenceLine x="2020-03-14" stroke="#4A72B7" strokeDasharray="4 4" label={{ position: 'insideTopLeft',  value: 'National emergency declare', fill: '#4A72B7', fontSize: "12" }} />
                <ReferenceLine x="2020-03-28" stroke="#809f3d" strokeDasharray="4 4" label={{ position: "bottom", value: "CARES act enacted", fill: "#809f3d", offset: 30, fontSize: "12" }} />
                <ReferenceLine x="2020-04-18" stroke="#F48620" strokeDasharray="4 4" label={{ position: 'bottom', value: "Stimulus payments starts", fill: "#F48620", offset: 45, fontSize: "12" }} />
                <ReferenceLine x="2020-11-07" stroke="#4A72B7" strokeDasharray="4 4" label={{ position: "insideTopRight", value: "Election day", fill: "#4A72B7", fontSize: "12" }} />
                <ReferenceLine x="2020-11-28" stroke="#368243" strokeDasharray="4 4" label={{ position: "bottom", value: "Thanksgiving", fill: "#368243", offset: 20, fontSize: "12" }} />
                <ReferenceLine x="2020-12-26" stroke="#EE3E23" strokeDasharray="4 4" label={{ position: "bottom", value: "Christmas", fill: "#EE3E23", offset: 35, fontSize: "12" }} />
                <ReferenceArea x1={config.forecastStartDate} x2={config.forecastEndDate} y1={0} stroke="red" strokeOpacity={0.3} label={{ value: "4 wks forecast", fontSize: "16", position: "insideTopRight", fill: "323232", offset: 15 }}/>
                <Line type="monotone" dataKey="cases" stroke="#043b4e" strokeWidth={4} dot={false} />
                <Tooltip
                    content={<CustomChartTooltip />}
                />
            </LineChart>
        </div>

    )
}

export default StatesChart;