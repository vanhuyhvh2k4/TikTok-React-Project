import * as request from '~/utils/httpRequest';
import { loginFailed, loginStart, loginSuccess, logoutFailed, logoutStart, logoutSuccess, signUpFailed, signUpStart, signUpSuccess } from "~/redux/authSlice";

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await request.post('auth/login', user);
        dispatch(loginSuccess(res.data));
        navigate('/');
        return res.data;
    } catch (error) {
        dispatch(loginFailed());
        return error;
    }
}
export const signUpUser = async (newUser, dispatch) => {
    dispatch(signUpStart());
    const res = await request.post('auth/signup', newUser);
    try {
        dispatch(signUpSuccess(res.data));
        return res.data;

    } catch (error) {
        dispatch(signUpFailed());
        return error;
    }
}

export const logoutUser = async (dispatch, accessToken) => {
    dispatch(logoutStart());
    const res = await request.post('auth/logout', {
        "message": "logout"
    }, {
        headers: {
            token: `bearer ${accessToken}`,
          }
    });
    try {
        dispatch(logoutSuccess());
        return res.message;
    } catch (error) {
        dispatch(logoutFailed());
        return error;
    }
}

export const checkUser = async (data) => {
    try {
        const res = await request.post('auth/signup/checkuser', data);
        return res;
    } catch (error) {
        return error;
    }
}

export const checkEmail = async (data) => {
    try {
        const res = await request.post('auth/signup/checkemail', data);
        return res;
    } catch (error) {
        return error;
    }
}