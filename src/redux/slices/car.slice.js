import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    status: null,
    formErrors:{}
}

const getAll = createAsyncThunk(
    "CarSlice/getAll",
    async () => {
        const {data} = await carService.getAll();
        return data
    }
);
const create = createAsyncThunk(
    "CarSlice/create",
    async ({car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.create(car);
            return data
        } catch (e) {
         return  rejectWithValue({status:e.message, formErrors:e.response.data})
        }

    }
);

const carSlice = createSlice({
    name: 'CarSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getAll.pending]: (state, action) => { // момент загрузки
            state.status = 'pending'
        },
        [getAll.fulfilled]: (state, action) => { // когда загрузилось
            state.status = 'fulfilled'
            state.cars = action.payload
        },
        [getAll.rejected]: (state, action) => { // для ошибок
            state.status = 'rejected'
        },
        [create.fulfilled]: (state, action) => {
            state.cars.push(action.payload)
            console.log("fulfilled")
        },
        [create.rejected]: (state, action) => {
            state.status = 'rejected'
            const {status, formErrors }=(action.payload)
            state.status = status
            state.formErrors = formErrors
        }

    }
});

const {reducer: carReduser, actions} = carSlice;

const carActions = {
    getAll,
    create
}

export {
    carReduser,
    carActions
}
