import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography, Marker, Annotation } from "react-simple-maps"
import { geoCentroid } from "d3-geo";

import { csv } from "d3-fetch";
import csvNation from "../Data/Country/JHU_IncidentCases_Country.csv";
import CustomChartTooltip from "./CustomChartTooltip";

import csvState from "../Data/State/JHU_IncidentCases_State.csv";
import { scaleQuantile } from "d3-scale";

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceLine, ReferenceArea } from 'recharts';
import allStates from "../Maps/allstates.json";
import config from "../config.json"

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const offsets = {
    DC: [30, 25]
};
const latestDate = config.dataEndDate;

const National = () => {

    const [nationalData, setNationlData] = useState([]);
    const [nationalCase, setNationalCase] = useState("");

    // state data
    const [stateData, setStateData] = useState([]); // for mapping
    const [allStatesData, setAllStatesData] = useState([]);
    const [oneStateData, setOneStateDate] = useState([]);
    const [stateCase, setStateCase] = useState(config.dataWashingtonStateEndValue); // for WA cumulative case data
    const [error, setError] = useState('');

    useEffect(() => {
        let isSubscribed = true;
        csv(csvNation).then(nat => {
            setNationlData(nat);
            let latest = nat.filter(a => a.dates === latestDate);
            setNationalCase(latest.map(a => a["US"]));
        })
        csv(csvState).then(state => {
            if (isSubscribed) {
                let st = state[state.length-5];
                let converted = Object.keys(st).map(key => ({ key, cases: st[key]}))
                setStateData(converted);
                setAllStatesData(state);
                setOneStateDate(st);
            }
        })
        .catch(error => (isSubscribed ? setError(error.toString()) : null));
        return () => isSubscribed = false;
    }, []);

    const colorScale = scaleQuantile()
        .domain(stateData.map(d => d.cases))
        .range([
            "#ffedea",
            "#ffcec5",
            "#ffad9f",
            "#ff8a75",
            "#ff5533",
            "#e2492d",
            "#be3d26",
            "#9a311f",
            "#782618"
    ]);

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
                                { geographies.map(geo => {
                                    const cur = stateData.find(s => s.key === geo.id);
                                    return (
                                        <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={cur ? colorScale(cur.cases) : "#EEE"}
                                        stroke="#fff"
                                        style={{
                                            hover: {
                                                stroke: "#782618",
                                                strokeWidth: 2,
                                            }
                                        }}
                                    />
                                    );
                                })}
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
                    <YAxis fontSize="10" axisLine={false} tickLine={false} domain={[0, 3000]}/>
                    <ReferenceLine x="2020-01-25" stroke="#EE3E23" strokeDasharray="4 4" label={{ position: "bottom", value: "1st case in US", fontSize: "12", fill:"#EE3E23", offset: 20 }} />
                    <ReferenceLine x="2020-03-14" stroke="#4A72B7" strokeDasharray="4 4" label={{ position: 'insideTopLeft',  value: 'National emergency declared', fill: '#4A72B7', fontSize: "12" }} />
                    <ReferenceLine x="2020-03-28" stroke="#809f3d" strokeDasharray="4 4" label={{ position: "bottom", value: "CARES act enacted", fill: "#809f3d", offset: 30, fontSize: "12" }} />
                    <ReferenceLine x="2020-04-18" stroke="#F48620" strokeDasharray="4 4" label={{ position: 'bottom', value: "Stimulus payments starts", fill: "#F48620", offset: 45, fontSize: "12" }} />
                    <ReferenceLine x="2020-11-28" stroke="#368243" strokeDasharray="4 4" label={{ position: "bottom", value: "Thanksgiving", fill: "#368243", offset: 20, fontSize: "12" }} />
                    <ReferenceLine x="2020-12-12" stroke="#EE3E23" strokeDasharray="4 4" label={{ position: "insideLeft", value: "1st vaccine*", fill: "#EE3E23", fontSize: "12" }} />
                    <ReferenceLine x="2021-12-04" stroke="#4A72B7" strokeDasharray="4 4" label={{ position: "bottom", value: "1st Omicron case", fill: "#4A72B7", fontSize: "12", offset: 20 }} />
                    <ReferenceArea x1={config.forecastStartDate} x2={config.forecastEndDate} y1={0} stroke="red" strokeOpacity={0.3} label={{ value: "4 wks forecast", fontSize: "16", position: "insideTopRight", fill: "323232", offset: 10 }}/>
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