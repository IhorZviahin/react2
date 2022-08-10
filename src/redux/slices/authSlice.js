import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {authService} from "../../services";

const initialState = {
    isAuth: null,
    loginError: null,
};

const login = createAsyncThunk(
    "login",
    async ({user}) => {
        const {data} = await authService.getTokens(user);
        return data
    }
);
const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, actions) => {
                state.isAuth = true
                state.loginError = false
                const {access, refresh} = actions.payload;
                localStorage.setItem("access", access)
                localStorage.setItem("refresh", refresh)
            })
            .addCase(login.rejected, (state, actions) => {
                state.loginError = true
            })
    }
});

const {reducers: authReducer, actions} = authSlice;

const authActions = {
    login
}

export {
    authReducer,
    authActions
}
