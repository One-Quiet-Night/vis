import React, { useState, useEffect, memo } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import { csv } from "d3-fetch";
import csvData from './umemployment-by-county-2017.csv'; 

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

const QuantileUSMAP = ({ setTooltipContent })  => {
    const [data, setData] = useState([]);

    useEffect(() => {
        csv(csvData).then(counties => {
            setData(counties);
        });
    }, []);

    const colorScale = scaleQuantile()
        .domain(data.map(d => d.unemployment_rate))
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
        <>
            <ComposableMap data-tip="" projection="geoAlbersUsa">
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                    geographies.map(geo => {
                        const cur = data.find(s => s.id === geo.id);
                        return (
                        <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill={cur ? colorScale(cur.unemployment_rate) : "#EEE"}
                            onMouseEnter={() => {
                                console.log(cur.name)
                                setTooltipContent(`${cur.name} : ${cur.unemployment_rate}`);
                            }}
                            onMouseLeave={() => {
                                setTooltipContent("");
                            }}
                        />
                        );
                    })
                    }
                </Geographies>
            </ComposableMap>
        </>
        
    )

}

export default memo(QuantileUSMAP);