import {axiosService} from "./axios.service";
import {urls} from "../constants";

const episodeService = {
    getALL:(page=1)=>axiosService.get(urls.episodes, {params: {page}})
}
export {episodeService}