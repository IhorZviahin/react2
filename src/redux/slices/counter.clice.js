import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count1: 0,
    count2: 0
};

const counterClice = createSlice({
    name: 'counterClice',
    initialState,
    reducers: {
        incCount1: (state) => {
            state.count1 += 1
        },
        decCount1: (state) => {
            state.count1 -= 1
        },
        resetCount1: (state, action) => {
            state.count1 = action.payload || 0
        },

        incCount2: (state) => {
            state.count2 += 2
        },
        decCount2: (state) => {
            state.count2 -= 2
        },
        resetCount2: (state, action) => {
            state.count2 = action.payload || 0
        }
    }
});

const {reducer: counterReduser, actions:{incCount1, decCount1, resetCount1, decCount2, incCount2, resetCount2}} = counterClice;

export default counterReduser;

export const counterActions = {
    incCount1, decCount1, resetCount1, decCount2, incCount2, resetCount2
};