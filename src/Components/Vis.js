import React, { useState, useEffect } from 'react';
import { csv } from "d3-fetch";
import historicalData from "../Assets/historical_export.csv";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

const Vis = () => {
    const [region, setRegion] = useState("US")

    return (
        <div>
        </div>
    )
}

export default Vis;