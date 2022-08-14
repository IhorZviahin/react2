import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {moviesReduser} from "./slices";


const rootReducer = combineReducers({
    movies: moviesReduser
});

const store = configureStore({
    reducer: rootReducer
})

export {
    store
}