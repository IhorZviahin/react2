import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services";

const initialState = {
    theme: false,
    colorTheme: 'light',
};


const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        themeChange: (state, action) => {
            const theme = action.payload;
            if (theme === true) {
                state.colorTheme = "dark"
                state.theme = true
            }
            if (theme === false) {
                state.colorTheme = "light"
                state.theme = false
            }

        }
    },

});

const {reducer: themeReduser, actions: {themeChange}} = themeSlice;

const themeActions = {
    themeChange
}

export {
    themeReduser,
    themeActions
}