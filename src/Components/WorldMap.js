import React, { Component } from 'react';
import { geoMercator, geoPath } from 'd3-geo';


const margin = {top: 0, right: 0, bottom: 0, left: 0};
const width = 960 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

class WorldMap extends Component {
    render() {
        const projection = geoMercator()
            .scale(130)
            .translate( [width / 2, height / 1.5]);

        const pathGenerator = geoPath().projection(projection)
        const countries = this.props.data
            .map((d,i) => <path
                key={"path" + i}
                d={pathGenerator(d)}
                // onMouseEnter={() => {this.props.onHover(d)}}
                // style={{fill: this.props.hoverElement === d.id ? "#FCBC34" : this.props.colorScale(d.launchday), stroke: "black", strokeOpacity: 0.5 }}
                style={{fill: 'blue', 'opacity': 0.6, 'stroke-width': 0.3}}
                className="countries"
            />)
        return <svg width={width} height={height}>
            {countries}
        </svg>
    }
}
export default WorldMap