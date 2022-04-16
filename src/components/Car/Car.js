import React from 'react';
import {carService} from "../../services";

const Car = ({car}) => {
    const {id, model, price, year} = car

    const delсar = async () => {
        await carService.DeletebyId(id)
    }
    return (
        <div>
            <div> id: {id}--model: {model} -- price: {price} -- year: {year}</div>
            <button onClick={() => delсar()}> del</button>
            <hr/>
        </div>
    );
};

export {Car};