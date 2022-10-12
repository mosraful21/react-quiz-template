import React, { useEffect, useState } from 'react';
import Option from '../Option/Option';
import { EyeIcon } from '@heroicons/react/24/solid'

const Qus = ({ qus }) => {
    const { options, correctAnswer } = qus;
    const [toggle, setToggle] = useState(false);
    const [string, setString] = useState(qus.question);

    useEffect(() => {
        const regex = /(<([^>]+)>)/gi;
        const newString = string.replace(regex, "");
        setString(newString);
    })

    return (
        <div className='p-3 m-3 border-2 rounded bg-gray-200'>
            <h2 className='text-2xl font-medium'>{string}</h2>
            <div className='flex items-center justify-between md:h-10'>

                <button onClick={() => setToggle(!toggle)}><EyeIcon className='w-5 h-5'></EyeIcon></button>
                {
                    toggle && <div className='text-1xl font-semibold text-green-700'>Ans: {correctAnswer}</div>
                }
            </div>
            <div className='mx-auto'>
                {
                    options.map(option => <Option
                        correctAnswer={correctAnswer}
                        option={option}
                    > </Option>)
                }
            </div>
        </div>
    );
};

export default Qus;