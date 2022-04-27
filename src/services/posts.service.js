import {axiosService} from "./axios.service";

import {urls} from "../constants";

const postsService = {
    getAll: (page, _limit = 10) => axiosService.get(urls.posts, {
        params: {
            _start:(page-1)*_limit,
            _limit
        }
    }),
    getById: (id) => axiosService.get(`${urls.posts}/${id}`)

}

export {postsService}