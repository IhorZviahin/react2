import {combineReducers, configureStore} from "@reduxjs/toolkit";

import catReduser from "./slices/cat.slices";
import dogReduser from "./slices/dog.slices";

const rootReduser = combineReducers({
    cats: catReduser,
    dogs: dogReduser
});

export const store = configureStore({
    reducer:rootReduser
})
