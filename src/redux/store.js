import {combineReducers, configureStore} from "@reduxjs/toolkit";
import counterReduser from "./slices/counter.clice";

const rootReduser = combineReducers({
    counter: counterReduser
});

const store = configureStore({
    reducer: rootReduser
});

export default store;