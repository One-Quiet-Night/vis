import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker, Annotation } from "react-simple-maps"
import { geoCentroid } from "d3-geo";

import allStates from "../Maps/allstates.json";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const offsets = {
    VT: [50, -8],
    NH: [34, 2],
    MA: [30, -1],
    RI: [28, 2],
    CT: [35, 10],
    NJ: [34, 1],
    DE: [33, 0],
    MD: [47, 10],
    DC: [49, 21]
};

const National = () => {
    return (
        <ComposableMap projection="geoAlbersUsa">
            <Geographies  geography={geoUrl}> 
                {({ geographies }) =>          
                    geographies.map((geo, i) =>
                        <Geography
                        key={i}
                        geography={geo}
                        style={{
                            default: {
                                fill: "#DDD",
                                stroke: "#FFF",
                                strokeWidth: 1,
                                outline: "none",
                            },
                            hover: {
                                fill: "#F5A51C",
                                stroke: "#FFF",
                                strokeWidth: 1,
                                outline: "none",
                            },
                            pressed: {
                                fill: "#EE3E23",
                                stroke: "#EE3E23",
                                outline: "none",
                            }
                        }}
                        />
                    )}
                {/* {geographies.map(geo => {
                const centroid = geoCentroid(geo);
                const cur = allStates.find(s => s.val === geo.id);
                return (
                    <g key={geo.rsmKey + "-name"}>
                    {cur &&
                        centroid[0] > -160 &&
                        centroid[0] < -67 &&
                        (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                        <Marker coordinates={centroid}>
                            <text y="2" fontSize={12} textAnchor="middle">
                            {cur.id}
                            </text>
                        </Marker>
                        ) : (
                        <Annotation
                            subject={centroid}
                            dx={offsets[cur.id][0]}
                            dy={offsets[cur.id][1]}
                        >
                            <text x={4} fontSize={14} alignmentBaseline="middle">
                            {cur.id}
                            </text>
                        </Annotation>
                        ))}
                    </g>
                );
                })} */}
            </Geographies>
        </ComposableMap>
    )
}

export default National;