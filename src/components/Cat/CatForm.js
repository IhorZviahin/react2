import React, {useState} from 'react';
import {useDispatch} from "react-redux";

import {catActions} from "../../redux";

const CatForm = () => {
    const [cat, setCat] = useState("");
    const dispatch = useDispatch();

    const save = () => {
        dispatch(catActions.addCat({name:cat}));
        setCat("");
    };

    return (
        <div>
            <label>Cat: <input type="text" onChange={(e) => setCat(e.target.value)}/></label>
            <button onClick={save}>add</button>
        </div>
    );
};

export {CatForm};