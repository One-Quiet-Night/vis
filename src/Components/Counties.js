import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps"

import { csv } from "d3-fetch";
import csvCounty from "../Data/County/JHU_IncidentCases_County.csv";
import csvLocation from "../Data/locations_information.csv";
import { scaleQuantile } from "d3-scale";
import CountyChart from "./CountyChart";
import ReactTooltip from "react-tooltip";
import CountySelection from "./CountySelection";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";
const latestDate = 'Nov 14 2020';

const Counties = () => {

    const [countyData, setCountyData] = useState([]); // for mapping
    const [onCountyId, setOnCountyId] = useState("53033"); // initialize king county data
    const [allCountiesData, setAllCountiesData] = useState([]);
    const [oneCountyData, setoneCountyData] = useState([]);
    const [countyCase, setCountyCase] = useState("52");
    const [countyLocation, setCountyLocation] = useState([]); 
    const [tooltip, setTooltip] = useState('');
    const [yMax, setYMax] = useState(52);


    useEffect(() => {
        csv(csvCounty).then(county => {
            let co = county[county.length-5];
            let converted = Object.keys(co).map(key => ({ key, cases: co[key]}));
            setCountyData(converted); // console.log(countyData) -- {key: "10001", cases: "1974.1572909406702"}
            setAllCountiesData(county);
            setoneCountyData(co);
        })
    }, []);

    useEffect(() => {
        csv(csvLocation).then(loc => {
            setCountyLocation(loc.filter(d => d.type === "county"));
        })
    }, []);

    let countyName = countyLocation.filter(d => d.fips === onCountyId).map(d => `${d.name} county in ${d.state}`);

    const colorScale = scaleQuantile()
        .domain(countyData.map(d => d.cases))
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
            {onCountyId && <CountySelection onCountyId={onCountyId} setOnCountyId={setOnCountyId} oneCountyData={oneCountyData} setCountyCase={setCountyCase} setYMax={setYMax} />}

            <p style={{fontSize: "20px", fontWeight: "300"}}>In the <code>{countyName}</code>, on the week ending on <code>{latestDate}</code>, <br/>there were <code>{Math.round(countyCase)}</code> reported COVID-19 cases per 100K people.</p>
            <div className="vis-wrapper">
                <div className="forecast usmap" >
                    <ComposableMap data-tip="" projection="geoAlbersUsa" projectionConfig={{ scale: 800 }} 
                            width={900} style={{ width: "100%", height: "auto" }}>
                        <Geographies geography={geoUrl}>
                            {({ geographies }) =>
                            geographies.map(geo => {
                                const cur = countyData.find(s => s.key === geo.id);
                                return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill={cur ? colorScale(cur.cases) : "#EEE"}
                                    onClick={() => {
                                        // console.log(cur.key, cur.cases);
                                        setOnCountyId(cur.key);
                                        setCountyCase(cur.cases);
                                        setYMax(Math.round(cur.cases));
                                    }}
                                    onMouseEnter={() => {
                                        setTooltip(`${geo.properties.name} county : ${Math.round(cur.cases)}`);
                                    }}
                                    onMouseLeave={() => {
                                        setTooltip("");
                                    }}
                                />
                                );
                            })
                            }
                        </Geographies>
                    </ComposableMap>
                    <ReactTooltip backgroundColor="#b3b3b3" textColor="#1a1a1a">{tooltip}</ReactTooltip>
                </div>
            {allCountiesData && <CountyChart onCountyId={onCountyId} allCountiesData={allCountiesData} yMax={yMax} /> }
        </div>
    </div>
    )
}

export default Counties;