import axios from "axios";

import {baseURL} from "../constants";

const axiosService = axios.create({baseURL});

let  isRefreshing = false

axiosService.interceptors.request.use((config)=>{
    const access = localStorage.getItem("access");
    config.headers.Authorization = `Bearer ${access}`
    return config
})

export {
    axiosService
}