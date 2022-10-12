import React from 'react';
import Option from '../Option/Option';

const Qus = ({qus}) => {
    const {question, options} = qus;
    const qusEdit = question.slice(3, -4);
    return (
        <div className='border-4 p-3 m-3'>
            <h2 className='text-2xl font-medium'>{qusEdit}</h2>
            <div className='grid grid-cols-2 w-6/12 mx-auto'>
                {
                    options.map(option => <Option option={option}> </Option> ) 
                }
            </div>
        </div>
    );
};

export default Qus;