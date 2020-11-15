import React, { useState, useEffect } from 'react';

import { csv } from "d3-fetch";
import { scaleQuantile } from "d3-scale";
import { LineChart, XAxis, YAxis, Line, CartesianGrid, ReferenceLine } from "recharts";

import csvChart from '../Assets/format_1.csv';

// county : county fips-id
const Chart = ({ county, setCounty}) => {
    let on = county;

    const [data, setData] = useState([]);

    useEffect(() => {
        csv(csvChart).then(counties => {
            
            let oneCounty = counties.map(function(d) 
            {return { date: d.dates, case: d[on] }});
            // console.log(oneCounty);
            setData(oneCounty);
        })
    }, [on])

    return (
        <div>
            <p>{county}</p>
            {data && 
            <LineChart width={900} height={500} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <Line type="monotone" dataKey="case" stroke="#8884d8" isAnimationActive={false} strokeWidth={5} dot={false} />
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="date" interval="preserveEnd" />
                <YAxis type="number" allowDataOverflow={true} domain={[0, 'dataMax + 1000']}  />
                <ReferenceLine x="2020-04-01" stroke="green" label="Min PAGE" />

            </LineChart>
            }
            
        </div>
    )
}

export default Chart;