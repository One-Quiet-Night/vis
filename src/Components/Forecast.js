import React, { useState, useEffect } from "react";

import { csv } from "d3-fetch";
import { scaleQuantile } from "d3-scale";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import ReactTooltip from 'react-tooltip';

import csvMap from '../Assets/format_2.csv';
import Chart from "./Chart";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";
const latestDate = "2020-11-11";

const Forecast = () => {

    const [region, setRegion] = useState([]);
    const [county, setCounty] = useState([]);
    // fetch only the latest county data
    useEffect(() => {
        csv(csvMap).then(counties => {
            setRegion(counties.filter(function(d) {return d.dates === latestDate}));
            // console.log('fetch: ', region);
            // let usData = counties.filter(function(d) {return d.dates == '2020-11-11'});
            // console.log('fetched: ', usData);
        });
    }, []);

    const colorScale = scaleQuantile()
        .domain(region.map(d => d.value))
        .range([
            "#ffedea",
            "#ffcec5",
            "#ffad9f",
            "#ff8a75",
            "#ff5533",
            "#e2492d",
            "#be3d26",
            "#9a311f",
            "#782618"]);

    return (
        <div className="forecast container">
            <h2>Latest map and COVID-19 case count in the U.S.</h2>
            <p>Date: {latestDate}</p>
            {county && <p>county id: {county}</p>}
            <ComposableMap projection="geoAlbersUsa" style={{ maxHeight: "600"}} >
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map(geo => {
                            const cur = region.find(s => s.fips === geo.id);
                            return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={cur ? colorScale(cur.value) : "#EEE"}
                                        onClick={() => {
                                            console.log(`${geo.properties.name} county ${cur.id}: ${cur.value}`);
                                            setCounty(cur.fips);
                                        }}
                                        // onMouseEnter={() => {
                                        //     // console.log(cur.name)
                                        //     setTooltipContent(`${cur.name} : ${cur.value}`);
                                        // }}
                                        // onMouseLeave={() => {
                                        //     setTooltipContent("");
                                        // }}
                                    />
                            );
                        })
                    }
                </Geographies>
            </ComposableMap>
            {/* <ReactTooltip>{region}</ReactTooltip> */}
            <div className="vis">
                <h2>In 'county', COVID-19 case</h2>
                {county && <Chart county={county} setCounty={setCounty} />}
            </div>
        </div>
    )
}

export default Forecast;