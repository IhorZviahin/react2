import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {moviesReduser,themeReduser} from "./slices";


const rootReducer = combineReducers({
    movies: moviesReduser,
    theme: themeReduser
});

const store = configureStore({
    reducer: rootReducer
})

export {
    store
}