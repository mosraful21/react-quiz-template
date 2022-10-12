import React from 'react';
import swal from 'sweetalert';

const Option = (option, correctAnswer) => {

    const handleOnClick = () => {
        if(option.option === option.correctAnswer){
            swal("Right Answer");
        }
        else{
            swal("Wrong Answer!!");
        }
    }

    return (
        <div>
            <button onClick={handleOnClick} className='border-2 m-2 w-3/5 rounded-lg bg-white p-2'>{option.option}</button>
        </div>
    );
};

export default Option;