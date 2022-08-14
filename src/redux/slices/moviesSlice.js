import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services";

const initialState = {
    movies: [],
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