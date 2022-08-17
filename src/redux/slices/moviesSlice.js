import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services";

const initialState = {
    movies: [],
    total_pages: null,
    page: null,
    movie: null,
};

const getAll = createAsyncThunk(
    "moviesSlice/getAll",
    async ({page}) => {
        try {
            const {data} = await moviesService.getAll(page);
            return data
        } catch (e) {

        }
    }
);

const getById = createAsyncThunk(
    "moviesSlice/getById",
    async ({id}) => {
        try {
            const {data} = await moviesService.getMovieById(id);
            return data
        } catch (e) {

        }
    }
);

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, actions) => {
                const data = actions.payload;
                state.movies = data.results;
                state.total_pages = data.total_pages;
                state.page = data.page;
            })
            .addCase(getById.fulfilled, (state, actions) => {
                state.movie = actions.payload;
            })
    }
});

const {reducer: moviesReduser, actions} = moviesSlice;

const moviesActions = {
    getAll,
    getById
}

export {
    moviesReduser,
    moviesActions
}