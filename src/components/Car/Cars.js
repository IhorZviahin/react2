import React, {useEffect, useState} from 'react';

import {carService} from "../../services";
import {Car} from "./Car";

const Cars = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [])

    console.log(cars)
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};