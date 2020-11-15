import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography, Marker, Annotation } from "react-simple-maps"
import { geoCentroid } from "d3-geo";

import { csv } from "d3-fetch";
import csvState from "../Data/State/JHU_CumulativeCases_State.csv";
import allStates from "../Maps/allstates.json";

import { scaleQuantile } from "d3-scale";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceLine, Label } from 'recharts';
import StatesChart from "./StatesChart";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const offsets = {
    DC: [30, 25]
};

const States = () => {

    const [stateData, setStateData] = useState([]); // for mapping
    const [onStateId, setOnStateId] = useState("53"); // for initializing WA data
    const [onStateData, setOnStateData] = useState([]); // for chart
    const [error, setError] = useState('');

    useEffect(() => {
        let isSubscribed = true;
        csv(csvState).then(state => {
            if (isSubscribed) {
                let st = state[state.length-1];
                let converted = Object.keys(st).map(key => ({ key, cases: st[key]}))
                setStateData(converted);
                let oneState = state.map(function(d) {
                    return { date: d.dates, cases: d[onStateId] }});
                setOnStateData(oneState); // change to get all state data first and send to child compo to prevent infinity loop
                console.log('useeffect', onStateId);
            } 
        })
        .catch(error => (isSubscribed ? setError(error.toString()) : null));
        return () => isSubscribed = false;
    }, []);

    console.log('states', onStateId);

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

    // for mapping the current cases : fetch only the last element from the csv data and map
    // for chart : filter out with the state fips id and plot
    return (
        <div className="vis-wrapper">
            <div className="forecast usmap" >
                <ComposableMap data-tip="" projection="geoAlbersUsa" 
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
                                            stroke: "#368243",
                                            strokeWidth: 2, 
                                        }
                                    }}
                                    onClick={() => {
                                        console.log(cur.key, cur.cases);
                                        setOnStateId(cur.key);
                                    }}
                                    // onMouseEnter={() => {
                                    //     // console.log(cur.cases)
                                    //     // setTooltipContent(`${cur.name} : ${cur.cases}`);
                                    // }}
                                    // onMouseLeave={() => {
                                    //     // setTooltipContent("");
                                    // }}
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
        {onStateData && <StatesChart onStateData={onStateData} setOnStateData={setOnStateData} onStateId={onStateId} /> }
        </div>
    )
}

export default States;