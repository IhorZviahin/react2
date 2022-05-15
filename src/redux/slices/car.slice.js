import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    cars: [],
    status: null,
    formErrors: {},
    carForUpdate:null
}

const getAll = createAsyncThunk(
    "CarSlice/getAll",
    async () => {
        const {data} = await carService.getAll();
        return data
    }
);

const deleteById = createAsyncThunk(
    "deleteById",
    async ({id}, {dispatch, rejectWithValue}) => {
        try {
            await carService.deleteById(id);
            dispatch(deleteCarById({id}))
        } catch (e) {
            return rejectWithValue({status: e.message})
        }
    }
);

const updateById = createAsyncThunk(
    "deleteById",
    async ({id, car}, {dispatch, rejectWithValue}) => {
        try {
            await carService.updateById(id, car);
            dispatch(updateCarById({id, car}))
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
            console.log(actions.payload)
            const index = state.cars.findIndex(car => car.id === actions.payload.id);
            state.cars.splice(index, 1)
        },
        updateCarById: (state, actions) => {
            const index = state.cars.findIndex(car => car.id === actions.payload.id);
            state.cars[index] = {...state.cars[index], ...actions.payload.car}
            state.carForUpdate = false;
        },
        setCarForUpdate: (state, actions) => {
            state.carForUpdate = actions.payload.car;
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

const {reducer: carReduser, actions: {deleteCarById, updateCarById, setCarForUpdate}} = carSlice;

const carActions = {
    getAll,
    create,
    deleteById,
    updateById,
    setCarForUpdate,
}

export {
    carReduser,
    carActions
}
