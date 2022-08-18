import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services";

const initialState = {
    movies: [],
    moviesByGenres: [],
    total_pages: null,
    total_pagesByGenres: null,
    page: null,
    pageByGenres: null,
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

const getMoviesByGenres = createAsyncThunk(
    "moviesSlice/getMoviesByGenres",
    async ({genreId, page}) => {
        try {
            const {data} = await moviesService.getWithGenresId(genreId, page);
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
            .addCase(getMoviesByGenres.fulfilled, (state, actions) => {
                const data = actions.payload;
                state.moviesByGenres = data.results;
                state.total_pagesByGenres = data.total_pages;
                state.pageByGenres = data.page;
            })
            .addCase(getById.fulfilled, (state, actions) => {
                state.movie = actions.payload;
            })
    }
});

const {reducer: moviesReduser, actions} = moviesSlice;

const moviesActions = {
    getAll,
    getById,
    getMoviesByGenres
}

export {
    moviesReduser,
    moviesActions
}