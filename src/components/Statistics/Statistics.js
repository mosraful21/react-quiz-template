import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, LineChart, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';

const Statistics = () => {
    const data = useLoaderData();
    
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