import React, { useState, useEffect } from "react";

import { csv } from "d3-fetch";
import { scaleQuantile } from "d3-scale";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import csvMap from '../Assets/format_2.csv';
import Chart from "./Chart";
import National from "./National";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";
const latestDate = "2020-11-11";

const Forecast = () => {

    return (
        <div className="container">
            <p>National</p>
            <p>States</p>
            <p>Counties</p>
            <div className="forecast">
                <National />
            </div>
            
            
        </div>
    )
}

export default Forecast;