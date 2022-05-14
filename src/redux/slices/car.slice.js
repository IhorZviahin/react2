import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    status: null,
    formErrors: {}
}

const getAll = createAsyncThunk(
    "CarSlice/getAll",
    async () => {
        const {data} = await carService.getAll();
        return data
    }
);

const deleteById = createAsyncThunk(
    "deleteCarById",
    async ({id}, dispatch, {rejectWithValue}) => {
        try {
            await carService.deleteById(id);
            dispatch(deleteCarById({id}))
        } catch (e) {
            return rejectWithValue({status: e.message})
        }
    }
);

const create = createAsyncThunk(
    "CarSlice/create",
    async ({car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.create(car);
            return data
        } catch (e) {
            return rejectWithValue({status: e.message, formErrors: e.response.data})
        }

    }
);

const carSlice = createSlice({
    name: 'CarSlice',
    initialState,
    reducers: {
        deleteCarById: (state, actions) => {
            const index = state.cars.findIndex(car => car.id === actions.payload.id);
            state.cars.splice(index, 1)
        }

    },
    extraReducers: {
        [getAll.pending]: (state) => {
            state.status = 'pending'
        },
        [getAll.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.cars = action.payload
        },
        [getAll.rejected]: (state) => {
            state.status = 'rejected'
        },
        [create.fulfilled]: (state, action) => {
            state.cars.push(action.payload)
            console.log(state)
        },
        [create.rejected]: (state, action) => {
            state.status = 'rejected'
            const {status, formErrors} = (action.payload)
            state.status = status
            state.formErrors = formErrors
        }

    }
});

const {reducer: carReduser, actions: {deleteCarById}} = carSlice;

const carActions = {
    getAll,
    create,
    deleteById
}

export {
    carReduser,
    carActions
}
