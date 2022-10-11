import React from 'react';
import { CartesianGrid, LineChart, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';

const Statistics = () => {
    const data = [
        {
            "name": "React",
            "Total": 10,
            "Right": 8
        },
        {
            "name": "JavaScript",
            "Total": 12,
            "Right": 9
        },
        {
            "name": "CSS",
            "Total": 5,
            "Right": 8
        },
        {
            "name": "HTML",
            "Total": 8,
            "Right": 6
        },
        {
            "name": "Git",
            "Total": 15,
            "Right": 11
        }
    ]
    return (
        <div className=''>
            <LineChart width={730} height={250} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Right" stroke="#8884d8" />
                <Line type="monotone" dataKey="Total" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default Statistics;