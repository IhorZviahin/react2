import {axiosService} from "./axiosService";
import {urls} from "../constants";

export const moviesService = {
    getAll:(page=1)=>axiosService.get(urls.movies,{params: {page}}),
    getPopular:(page=1)=>axiosService.get(`${urls.movies}/?sort_by=vote_average.desc`,{params: {page}}),
    getWithGenresId:(id, page=1)=>axiosService.get(`${urls.movies}/?with_genres=${id}`,{params: {page}},),
    getMovieById:(id)=>axiosService.get(`${urls.movie}/${id}`)
}



//getVideo:(id)=>axiosService.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(value => value.data),