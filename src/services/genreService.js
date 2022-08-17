import {axiosService} from "./axiosService";
import {urls} from "../constants";

export const genreService = {
    getAllGenre:()=>axiosService.get(urls.genre),
}