import {createSlice} from "@reduxjs/toolkit";

const initialState = {cats: []};

const catSlice = createSlice({
    name: 'catSlice',
    initialState,
    reducers: {
        addCat: (state, action) => {
            const {name} = action.payload;
            const newCat = {name, id: new Date().getTime()};
            state.cats.push(newCat);
        },
        deletCat: (state, action) => {
            const {id} = action.payload;
            const find = state.cats.findIndex((cat) => cat.id === id);
            state.cats.splice(find, 1);
        }

    }
});


const {reducer: catReduser, actions: {addCat, deletCat}} = catSlice;

export default catReduser;

export const catActions = {addCat, deletCat}
