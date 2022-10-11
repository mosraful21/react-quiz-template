import React from 'react';

const Qus = ({qus}) => {
    const {question, options} = qus;
    return (
        <div className='border p-3 m-3'>
            <h2 className='text-2xl font-medium'>{question}</h2>
            <ul className='p-3'>
                <li>{options}</li>
            </ul>
        </div>
    );
};

export default Qus;