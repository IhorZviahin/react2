import React from 'react';
import {useDispatch} from "react-redux";

import {carActions} from "../../redux";

const Car = ({car, car: {id, model, price, year}}) => {

    const dispatch = useDispatch();

    const deleteById = () => {
        dispatch(carActions.deleteById({id}))
    }

    return (
        <div>
            {id}--{model}--{price}--{year}
            <button onClick={() => {
                deleteById()
            }}>Delete
            </button>
            <button onClick={() => {
                dispatch(carActions.setCarForUpdate({car}))
            }
            }>Update
            </button>
        </div>
    );
};

export {Car}