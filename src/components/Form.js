import React, {useRef} from 'react';

const Form = () => {

    const nameInput = useRef()
    const array = [];
    console.log(array)

    return (
        <div>
            <label>Write your name <input type="text" ref={nameInput}/></label>
            <button onClick={()=>array.push(nameInput.current.value)}>ok</button>
        </div>
    );
};

export {Form};