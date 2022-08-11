import React, {useEffect, useState} from 'react';

import {carService} from "../../services";
import {Car} from "../Car/Car";

const Cars = () => {
    const [cars, SetCars] = useState([]);

    useEffect(() => {
        carService.getALL().then(value =>  SetCars(value.data.data))
    }, [])
    console.log(cars)
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};