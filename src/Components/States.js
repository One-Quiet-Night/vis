import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography, Marker, Annotation } from "react-simple-maps"
import { geoCentroid } from "d3-geo";
import ReactTooltip from "react-tooltip";

import { csv } from "d3-fetch";
import csvState from "../Data/State/JHU_IncidentCases_State.csv";
// I updated the JHU_CumulativeCases by adding last row from the OQN_CumulativeCasesForecast!!
import allStates from "../Maps/allstates.json";

import { scaleQuantile } from "d3-scale";
import StatesChart from "./StatesChart";
import StateSelection from "./StateSelection";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const offsets = {
    DC: [30, 25]
};

const latestDate = 'Nov 14 2020';

const States = () => {

    const [stateData, setStateData] = useState([]); // for mapping
    const [onStateId, setOnStateId] = useState("53"); // for initializing WA data
    const [allStatesData, setAllStatesData] = useState([]); 
    const [oneStateData, setOneStateDate] = useState([]);
    const [stateCase, setStateCase] = useState("1411"); // for WA cumulative case data
    const [error, setError] = useState('');
    const [tooltip, setTooltip] = useState('');
    const [yMax, setYMax] = useState(1411);

    useEffect(() => {
        let isSubscribed = true;
        csv(csvState).then(state => {
            if (isSubscribed) {
                let st = state[state.length-9];
                let converted = Object.keys(st).map(key => ({ key, cases: st[key]}))
                setStateData(converted);
                setAllStatesData(state);
                setOneStateDate(st);
            } 
        })
        .catch(error => (isSubscribed ? setError(error.toString()) : null));
        return () => isSubscribed = false;
    }, []);

    const stateInfo = allStates.filter(d => d.val === onStateId).map(d => d.name);

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
        <div>
            <p style={{fontSize: "20px", fontWeight: "300"}}>In <code>{stateInfo}</code> state, on <code>{latestDate}</code>, there were <code>{Math.round(stateCase)}</code> newly reported COVID-19 cases per 100K people.</p>
            {onStateId && <StateSelection setOnStateId={setOnStateId} oneStateData={oneStateData} setStateCase={setStateCase} setYMax={setYMax}/>}
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
                                                stroke: "#782618",
                                                strokeWidth: 2, 
                                            }
                                        }}
                                        onClick={() => {
                                            setOnStateId(cur.key);
                                            setStateCase(cur.cases);
                                            setYMax(Math.round(cur.cases));
                                        }}
                                        onMouseEnter={() => {
                                            setTooltip(`${geo.properties.name}: ${Math.round(cur.cases)}`);
                                        }}
                                        onMouseLeave={() => {
                                            setTooltip("");
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
                    <ReactTooltip backgroundColor="#b3b3b3" textColor="#1a1a1a">{tooltip}</ReactTooltip>
                </div>
            {allStatesData && <StatesChart yMax={yMax} onStateId={onStateId} allStatesData={allStatesData} stateCase={stateCase} /> }
            </div>
            </div>
            
    )
}

export default States;