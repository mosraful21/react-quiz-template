import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizQus = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h1>React Name: {data.data.name}</h1>
            <div className='m-12 bg-slate-100'>
                <p>qus-1: {data.data.questions[0].question}</p>
                <ul>
                    {data.data.questions[0].options}
                </ul>
            </div>
            <div>
                <p>qus-2: {data.data.questions[1].question}</p>
                <ul>{data.data.questions[1].options}</ul>
            </div>
        </div>
    );
};

export default QuizQus;