import React from 'react';
import './Item.css'

const Item = ({ item }) => {
    const { name, total, logo } = item;
    return (
        <div className='border-2 p-2 rounded-lg'>
            <div className='bg-gray-500 rounded-lg'>
                <img src={logo} alt="" />
            </div>
            <div>
                <h2 className='text-2xl font-semibold'>Topic: {name}</h2>
                <p><small>Total Question: {total}</small></p>
            </div>
            <button className='bg-blue-400 rounded-lg px-24 py-1 font-semibold mt-2'>Start Now</button>
        </div>
    );
};

export default Item;