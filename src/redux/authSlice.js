
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
        },
        logout: {
            isFetching: false,
            status: null,
            error: false
        }
    },
    reducers: {
        // Login
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
        // Signup
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
        },
        // Logout
        logoutStart: (state) => {
            state.logout.isFetching = true;
            state.logout.error = false;
        },
        logoutSuccess: (state) => {
            state.logout.isFetching = false;
            state.login.currentUser = null;
            state.logout.status = 'success';
        },
        logoutFailed: (state) => {
            state.logout.isFetching = false;
            state.logout.status = 'error';
            state.logout.error = true;
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
    logoutStart,
    logoutSuccess,
    logoutFailed
} = authSlice.actions;

export default authSlice.reducer;