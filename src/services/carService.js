import {axiosService} from "./axiosService";
import {urls} from "../constants";

const carService = {
    getALL:()=>axiosService.get(urls.cars)
}

export {
    carService
}