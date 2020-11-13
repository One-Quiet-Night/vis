import React from 'react';
import { ComposableMap, Geographies, Geography, Annotation } from "react-simple-maps";

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const highlighted = ["USA"]

function BasicMap() {

    return (
        <div className="map">
            <ComposableMap>
                <Geographies 
                    geography={geoUrl}
                    fill="#EAEAEC"
                    stroke="#D6D6DA"
                    strokeWidth={0.5}>
                    {({ geographies }) =>
                    geographies.map(geo => {
                        const isHighlighted = highlighted.indexOf(geo.properties.ISO_A3) !== -1;
                        return (
                            <Geography key={geo.rsmKey} geography={geo} 
                                fill={isHighlighted ? "lightblue" : "#F6F0E9"} 
                                onClick={() => console.log(geo.properties.ISO_A3)}
                            />
                        )
                    })
                    }
                </Geographies>
                <Annotation
                    subject={[2.3522, 48.8566]}
                    dx={-50}
                    dy={-30}
                    connectorProps={{
                    stroke: "#FF5533",
                    strokeWidth: 1,
                    strokeLinecap: "round"
                    }}
                >
                    <text x="-5" textAnchor="end" alignmentBaseline="middle" fill="#F53">
                    {"Paris"}
                    </text>
                </Annotation>
            </ComposableMap>
        </div>
    );
}

export default BasicMap;
