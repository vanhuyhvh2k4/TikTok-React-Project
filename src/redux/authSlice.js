
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        login: {
            currentUser: null,
            isFetching: false,
            error: false,
        },
        signUp: {
            isFetching: false,
            status: null,
            error: false,
        }
    },
    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.error = false;
        },
        loginFailed: (state) => {
            state.login.isFetching = false;  
            state.login.error = true;
        },
        signUpStart: (state) => {
            state.signUp.isFetching = true;
        },
        signUpSuccess: (state) => {
            state.signUp.status = 'success';
            state.signUp.isFetching = false;
            state.signUp.error = false;
        },
        signUpFailed: (state) => {
            state.signUp.status = 'error';
            state.signUp.isFetching = false;
            state.signUp.error = true;
        }
    }
})

export const {
    loginStart,
    loginFailed,
    loginSuccess,
    signUpStart,
    signUpSuccess,
    signUpFailed,
} = authSlice.actions;

export default authSlice.reducer;