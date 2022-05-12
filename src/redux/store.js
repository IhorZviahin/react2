import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {carReduser} from "./slices/car.slice";

const rootReduser = combineReducers({
    cars: carReduser
});

const store = configureStore({
    reducer: rootReduser
});

export default store;