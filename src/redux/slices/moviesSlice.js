import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services";

const initialState = {
    movies: [],
    page: null,
    total_pages: null,

    moviesBySearch: [],
    pageBySearch: null,
    total_pagesBySearch: null,

    movie: null, //  getById

    moviesByGenres: [],
    total_pagesByGenres: null,
    pageByGenres: null,

    movieSearch: null,
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

const searchMovie = createAsyncThunk(
    "moviesSlice/searchMovie",
    async ({movieSearch}) => {
        try {
            const {data} = await moviesService.searchMovie(movieSearch);
            return data
        } catch (e) {
            console.log(e)
        }
    }
);

const getPopular = createAsyncThunk(
    "moviesSlice/getPopular",
    async ({page}) => {
        try {
            const {data} = await moviesService.getPopular(page);
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
    reducers: {
        movieSearch: (state, action) => {
            state.movieSearch = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, actions) => {
                const data = actions.payload;
                state.movies = data.results;
                state.total_pages = data.total_pages;
                state.page = data.page;
            })
            .addCase(searchMovie.fulfilled, (state, actions) => {
                const data = actions.payload;
                state.moviesBySearch = data.results;
                state.total_pagesBySearch = data.total_pages;
                state.pageBySearch = data.page;
            })
            .addCase(getPopular.fulfilled, (state, actions) => {
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

const {reducer: moviesReduser, actions: {movieSearch}} = moviesSlice;

const moviesActions = {
    getAll,
    getById,
    getMoviesByGenres,
    getPopular,
    searchMovie,
    movieSearch
}

export {
    moviesReduser,
    moviesActions
}