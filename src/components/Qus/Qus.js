import React from 'react';
import Option from '../Option/Option';
import { EyeIcon } from '@heroicons/react/24/solid'

const Qus = ({ qus }) => {
    const { question, options } = qus;
    const qusEdit = question.slice(3, -4);
    return (
        <div className='p-3 m-3'>
            <div className='flex items-center justify-between'>
                <h2 className='text-2xl font-medium'>{qusEdit}</h2>
                <button onClick={''}><EyeIcon className='w-5 h-5'></EyeIcon></button>
            </div>
            <div className='grid grid-cols-2 w-4/5 mx-auto'>
                {
                    options.map(option => <Option option={option}> </Option>)
                }
            </div>
        </div>
    );
};

export default Qus;