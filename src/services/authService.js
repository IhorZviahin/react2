import {axiosService} from "./axiosService";

const authService = {
    getTokens:(user)=>axiosService.post(urls.auth, user),
    refresh:(refresh)=>axiosService.post(`${urls.auth}/refresh`, {refresh})
}

export {
    authService
}