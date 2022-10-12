import React from 'react';

const Option = (option) => {
    return (
        <div className='border-4 m-2'>
            <button>{option.option}</button>
        </div>
    );
};

export default Option;