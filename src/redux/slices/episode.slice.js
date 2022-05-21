import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodeService} from "../../services";

const initialState = {
    pages: null,
    next: null,
    prev: null,
    episodes: [],
}

const getAll = createAsyncThunk(
    "episodeSlice/getAll",
    async ({page}) => {
        const {data} = await episodeService.getALL(page);
        return data
    }
);


const episodeSlice = createSlice({
    name: 'episodeSlice',
    initialState,
    reducers: {},
    extraReducers:(builder)=> {
        builder
            .addCase(getAll.fulfilled, (state,actions)=>{
              const {info:{pages, next, prev}, results} = actions.payload;
              state.pages = pages;
              state.next = next;
              state.prev = prev;
              state.episodes = results;
            })
    }
});

const {reducer: episodeReduser, actions} = episodeSlice;

const episodeActions = {
    getAll
}

export {
    episodeReduser,
    episodeActions
}