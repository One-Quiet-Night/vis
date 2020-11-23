import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography, Marker, Annotation } from "react-simple-maps"
import { geoCentroid } from "d3-geo";

import { csv } from "d3-fetch";
import csvNation from "../Data/Country/JHU_IncidentCases_Country.csv";
import CustomChartTooltip from "./CustomChartTooltip";

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceLine, ReferenceArea } from 'recharts';
import allStates from "../Maps/allstates.json";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const offsets = {
    DC: [30, 25]
};
const latestDate = 'Nov 21 2020';
// const forecastDate = "2020-11-21";

const National = () => {

    const [nationalData, setNationlData] = useState([]);
    const [nationalCase, setNationalCase] = useState("");

    useEffect(() => {
        csv(csvNation).then(nat => {
            setNationlData(nat);
            let latest = nat.filter(a => a.dates === "2020-11-21");
            setNationalCase(latest.map(a => a["US"]));
        })
    }, []);

    return (
        <div>
            <p style={{fontSize: "20px", fontWeight: "300", marginBottom: "30px"}}>In the <code>U.S.</code>, on the week ending on <code>{latestDate}</code>,<br/> there were <code>{Math.round(nationalCase)}</code> newly reported COVID-19 cases per 100K people.</p>
            <div className="vis-wrapper">
                <div className="forecast usmap" >
                    <ComposableMap projection="geoAlbersUsa" 
                    projectionConfig={{ scale: 800 }} 
                    width={900}
                    style={{ width: "100%", height: "auto" }}>
                        <Geographies geography={geoUrl}>
                            {({ geographies }) => (
                            <>
                                {geographies.map(geo => (
                                <Geography
                                    key={geo.rsmKey}
                                    stroke="#FFF"
                                    geography={geo}
                                    style={{
                                            default: {
                                                fill: "#DDD",
                                                stroke: "#FFF",
                                                strokeWidth: 1,
                                                outline: "none",},
                                            hover: {
                                                fill: "#F5A51C",
                                                stroke: "#FFF",
                                                strokeWidth: 1,
                                                outline: "none",},
                                            pressed: {
                                                fill: "#EE3E23",
                                                stroke: "#EE3E23",
                                                outline: "none",}}}/>
                                ))}
                                {geographies.map(geo => {
                                const centroid = geoCentroid(geo);
                                const cur = allStates.find(s => s.val === geo.id);
                                return (
                                    <g key={geo.rsmKey + "-name"}>
                                    {cur &&
                                        centroid[0] > -160 &&
                                        centroid[0] < -67 &&
                                        (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                                        <Marker coordinates={centroid}>
                                            <text y="3" fontSize={12} textAnchor="middle">{cur.id}</text>
                                        </Marker>
                                        ) : (
                                        <Annotation subject={centroid} dx={offsets[cur.id][0]} dy={offsets[cur.id][1]}>
                                            <text x={2} fontSize={12} alignmentBaseline="middle">{cur.id}</text>
                                        </Annotation>
                                        ))}
                                    </g>
                                );
                                })}
                            </>
                            )}
                        </Geographies>
                    </ComposableMap>
                </div>
                
            { nationalData && 
            <div className="forecast">
                <LineChart width={600} height={400} margin={{ top: 10, right: 40, bottom: 40, left: 5 }}>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" vertical={false} />
                    <XAxis dataKey="dates" fontSize="10" axisLine={false} tickLine={false} />
                    <YAxis fontSize="10" axisLine={false} tickLine={false} domain={[0, 1300]}/>
                    <ReferenceLine x="2020-01-25" stroke="#EE3E23" strokeDasharray="4 4" label={{ position: "bottom", value: "First case in US", fontSize: "12", fill:"#EE3E23", offset: 20 }} />
                    <ReferenceLine x="2020-03-14" stroke="#4A72B7" strokeDasharray="4 4" label={{ position: 'insideTopLeft',  value: 'National emergency declare', fill: '#4A72B7', fontSize: "12" }} />
                    <ReferenceLine x="2020-03-28" stroke="#809f3d" strokeDasharray="4 4" label={{ position: "bottom", value: "CARES act enacted", fill: "#809f3d", offset: 30, fontSize: "12" }} />          
                    <ReferenceLine x="2020-04-18" stroke="#F48620" strokeDasharray="4 4" label={{ position: 'bottom', value: "Stimulus payments starts", fill: "#F48620", offset: 45, fontSize: "12" }} />
                    <ReferenceLine x="2020-11-07" stroke="#368243" strokeDasharray="4 4" label={{ position: "bottom", value: "Election day", fill: "#368243", offset: 20, fontSize: "12" }} />
                    <ReferenceArea x1="2020-11-21" x2="2021-01-16" y1={0} stroke="red" strokeOpacity={0.3} label={{ value: "8 wks forecast", fontSize: "16", position: "insideTopRight", fill: "323232", offset: 15 }}/>
                    <Line type="monotone" data={nationalData} dataKey="US" stroke="#043b4e" strokeWidth={4} dot={false} />
                    <Tooltip 
                        content={<CustomChartTooltip />}
                    />
                </LineChart>
            </div>
            }
            </div>
        </div>
    )
}

export default National;