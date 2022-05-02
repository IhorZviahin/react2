import {createSlice} from "@reduxjs/toolkit";

const initialState = {dogs: []};

const dogSlice = createSlice({
    name: 'dogSlice',
    initialState,
    reducers: {
        addDog: (state, action) => {
            const {name} = action.payload;
            const newDog = {name, id: new Date().getTime()};
            state.dogs.push(newDog);
        },
        deletDog: (state, action) => {
            const {id} = action.payload;
            const find = state.dogs.findIndex((dog) => dog.id === id);
            state.dogs.splice(find, 1);
        }
    }
});


const {reducer: dogReduser, actions: {addDog, deletDog}} = dogSlice;

export default dogReduser;

export const DogActions={addDog, deletDog};