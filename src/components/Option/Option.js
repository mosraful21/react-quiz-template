import React from 'react';


const Option = (option) => {
    return (
        <div>
            <button className='border-2 m-2 w-3/5 rounded-lg bg-white p-2'>{option.option}</button>
        </div>
    );
};

export default Option;