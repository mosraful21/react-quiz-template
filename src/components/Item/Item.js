import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid'
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
            <div className='bg-blue-400 flex items-center justify-center rounded-lg px-24 py-1 font-semibold mt-2'>
                <button onClick={''}>Start Now</button>
                <ArrowRightIcon className='h-4 w-4 text-black-500 ml-2'></ArrowRightIcon>
            </div>
        </div>
    );
};

export default Item;