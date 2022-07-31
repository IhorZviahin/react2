import React from 'react';
import {carService} from "../../services";

const Car = ({car, setCarforUpdate, setdeletecarId}) => {
    const {id, model, price, year} = car

    const delсar = async () => {
        await carService.DeletebyId(id)
        setdeletecarId(id)
    }
    return (
        <div>
            <div> id: {id}--model: {model} -- price: {price} -- year: {year}</div>
            <button onClick={() => delсar()}> del</button>
            <button onClick={() => setCarforUpdate(car)}> upadate</button>
            <hr/>
        </div>
    );
};

export {Car};