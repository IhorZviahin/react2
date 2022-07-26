import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services";

const Forms = ({setnewCar}) => {
    const [formError, setFormError] = useState({});
    const {register, handleSubmit, reset} = useForm();
    const submit = async (car) => { //3 - этап, функция получает информацию Data,  то есть готовый обьект в примере это машинки потому и название car
        try {
            const {data} = await carService.Create(car)
            setnewCar(data)
            reset()
        } catch (e) {
            setFormError(e.response.data);
        }

    }
    return (
        <form onSubmit={handleSubmit(submit)}> // handleSubmit - функция сделает preventdefault - что бы страница не обновилась, а так же вкладываем функцию(любое название) submit
            <div>
                <label> Model <input type="text" {...register("model")}/> </label> // register - это обьект и сейчас мы вкладываем в него данные с ключем "model"
            </div>

            {formError.model && <span>{formError.model[0]}</span>}
            <div>
                <label> Price <input type="text" {...register("price")} /> </label>
            </div>
            {formError.price && <span>{formError.model[0]}</span>}
            <div>
                <label> Year <input type="text" {...register("year", {valueAsNumber:true})} /> </label>
            </div>
            {formError.year && <span>{formError.model[0]}</span>}
            <button>save</button>
        </form>
    );
};

export {Forms};