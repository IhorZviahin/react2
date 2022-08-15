import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services";

const initialState = {
    movies: [],
    total_pages: null,
    page: null,
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
    }
});

const {reducer: moviesReduser, actions} = moviesSlice;

const moviesActions = {
    getAll
}

export {
    moviesReduser,
    moviesActions
}