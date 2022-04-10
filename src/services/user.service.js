import {axiosService} from "./axios.service";
import {urls} from "../constans";

const userService={
    getAll:()=> axiosService.get(urls.users).then(value => value.data),
}

export {userService}