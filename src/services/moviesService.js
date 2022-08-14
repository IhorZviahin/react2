import {axiosService} from "./axiosService";
import {urls} from "../constants";

export const moviesService = {
    getAll:(page=1)=>axiosService.get(urls.movies,{params: {page}}),
    getMovieById:(id)=>axiosService.get(`${urls.movie}/${id}`).then(value => value.data)
}