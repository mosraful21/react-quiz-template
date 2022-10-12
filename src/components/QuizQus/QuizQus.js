import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Qus from '../Qus/Qus';

const QuizQus = () => {
    const data = useLoaderData();
    const {name, questions} = data.data;
    return (
        <div className='m-3'>
            <h1 className='text-2xl font-semibold mb-4'>Topic Name: {name}</h1>
            <div className='border-2 md:w-4/6 mx-auto'>
                {
                    questions.map(qus => <Qus key={qus.id} qus={qus}> </Qus>)
                }
            </div>

        </div>
    );
};

export default QuizQus;