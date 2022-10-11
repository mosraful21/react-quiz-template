import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Qus from '../Qus/Qus';

const QuizQus = () => {
    const data = useLoaderData();
    const {name, questions} = data.data;
    return (
        <div>
            <h1 className='text-2xl font-semibold'>Topic Name: {name}</h1>
            <div className='m-12'>
                {
                    questions.map(qus => <Qus key={qus.id} qus={qus}> </Qus>)
                }
            </div>

        </div>
    );
};

export default QuizQus;