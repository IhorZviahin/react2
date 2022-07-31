import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi"

import {carService} from "../../services";
import {carValidators} from "../../validators";

const Forms = ({setnewCar, CarforUpdate}) => {
    const [formError, setFormError] = useState({});
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
        setValue // позволяет сетать данные
    } = useForm({resolver: joiResolver(carValidators), mode: "onTouched"});

    useEffect(() => {
        if (CarforUpdate) {
            const {model, price, year} = CarforUpdate;
            setValue("model", model)
            setValue("price", price)
            setValue("year", year)
        }
    }, [CarforUpdate])

    const submit = async (car) => { //3 - этап, функция получает информацию Data,  то есть готовый обьект в примере это машинки потому и название car
        try {
            if (CarforUpdate) {
                const {data} = await carService.Update(CarforUpdate.id, car)
                setnewCar(data)
            } else {
                const {data} = await carService.Create(car)
                setnewCar(data)
            }
            reset()
        } catch (e) {
            setFormError(e.response.data);
        }

    }
    return (
        // handleSubmit - функция сделает preventdefault - что бы страница не обновилась, а так же вкладываем функцию(любое название) submit
        // register - это обьект и сейчас мы вкладываем в него данные с ключем "model"

        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label> Model <input type="text" {...register("model")}/> </label>
            </div>
            {errors.model && <span>{errors.model.message}</span>}
            {formError.model && <span>{formError.model[0]}</span>}

            <div>
                <label> Price <input type="text" {...register("price")} /> </label>
            </div>
            {formError.price && <span>{formError.model[0]}</span>}
            {errors.price && <span>{errors.price.message}</span>}
            <div>
                <label> Year <input type="text" {...register("year", {valueAsNumber: true})} /> </label>
            </div>
            {formError.year && <span>{formError.model[0]}</span>}
            {errors.year && <span>{errors.year.message}</span>}
            <button>save</button>
        </form>
    );
};

export {Forms};