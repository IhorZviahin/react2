import {axiosService} from "./axios.service";
import {urls} from "../constans";

const postService={
    getid:(id)=> axiosService(`${urls.posts}/${id}`)
}

export {postService}