import {axiosService} from "./axiosService";
import {urls} from "../constants";

export const moviesService = {
    getAll:(page=1)=>axiosService.get(urls.movies,{params: {page}}),
    getWithGenresId:(id, page=1)=>axiosService.get(`${urls.movies}/?with_genres=${id}`,{params: {page}},),
    getMovieById:(id)=>axiosService.get(`${urls.movie}/${id}`)
}