import {axiosService} from "./axios.service";

import {urls} from "../constants";

const carService = {
    getAll: () => axiosService.get(urls.cars),
    getByid: (id) => axiosService(`${urls.cars}/${id}`),
    Create: (car) => axiosService.post(urls.cars, car),
    Update: (id, newCar) => axiosService.put(`${urls.cars}/${id}`, newCar),
    DeletebyId: (id) => axiosService.delete(`${urls.cars}/${id}`, id)
}

export {carService}