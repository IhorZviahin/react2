import React from 'react';
import {useDispatch} from "react-redux";

import {carActions} from "../../redux";

const Car = ({car: {id, model, price, year}}) => {

    const dispatch = useDispatch();

    const deleteById = () => {
        dispatch(carActions.deleteById({id}))
    }

    return (
        <div>
            {id}--{model}--{price}--{year}
            <button onClick={()=>{deleteById()}}>Delete</button>
        </div>
    );
};

export {Car}