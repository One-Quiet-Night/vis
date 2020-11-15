import React from 'react';
import { LineChart, Line, Bar, LabelList, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceLine, Legend } from 'recharts';

const data = [{ "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400  },
    { "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210 },
    { "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290 },
    { "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000 },
    { "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181 },
    { "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500 },
    { "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100 }]

const BasicChart = () => {
    return (
    <LineChart width={600} height={400} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 50 }}>
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        
        <XAxis dataKey="name" />
        <YAxis />
        <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
        <ReferenceLine y={4000} label="Max" stroke="red" strokeDasharray="3 3" />
        <Legend verticalAlign="top" height={26}/>
        <Tooltip />
        
    </LineChart>

    )
}

export default BasicChart;