import {axiosService} from "./axiosService";
import {urls} from "../constants";

const userService ={
    create:(user)=> axiosService.post(urls.users, user)
}

export {
    userService
}
