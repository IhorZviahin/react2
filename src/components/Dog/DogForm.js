import React, {useState} from 'react';
import {useDispatch} from "react-redux";

import {DogActions} from "../../redux";

const DogForm = () => {
    const [dog, setDog] = useState("");
    const dispatch = useDispatch();

    const save = () => {
        dispatch(DogActions.addDog({name:dog}));
        setDog("");
    };

    return (
        <div>
            <label>Dog: <input type="text" onChange={(e) => setDog(e.target.value)}/></label>
            <button onClick={save}>add</button>
        </div>
    );
};

export {DogForm};