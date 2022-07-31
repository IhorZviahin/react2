import React, {useEffect, useState} from 'react';

import {carService} from "../../services";
import {Car} from "./Car";

const Cars = ({newCar, setCarforUpdate}) => {

    const [cars, setCars] = useState([]);
    const [deletecarId, setdeletecarId] = useState(null); // null - потому что тут нечего нет пока не отработала функция удаления и не записала сюда id

    useEffect(() => {
        carService.getAll().then(value => setCars(value.data))
    }, [newCar, deletecarId]) //   вариант 1 deletecarId в deps слежу за id машинки которую удалил и сразу делаю запрос что бы отрендерить новый список

    // useEffect(() => {
    //     if (newCar) {
    //         setCars([...cars, newCar])
    //     }
    //     if (deletecarId) {
    //         setCars(cars.filter(car => car.id !== deletecarId))
    //     }
    // }, [newCar, deletecarId]) //   вариант 2 deletecarId в deps здесь я обновляю количество своих каров без запроса в бд( визуально удаляет), но он будет при обновлении страницы


    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setCarforUpdate={setCarforUpdate}
                                  setdeletecarId={setdeletecarId}/>)}
        </div>
    );
};

export {Cars};