
import axios from "axios";
import { loginFailed, loginStart, loginSuccess, signUpFailed, signUpStart, signUpSuccess } from "./authSlice";

export const loginUser = async (user, dispath, navigate) => {
    dispath(loginStart());
    try {
        const res = await axios.post('http://localhost:3001/api/auth/login', user);
        dispath(loginSuccess(res.data));
        navigate('/');
    } catch (error) {
        dispath(loginFailed());
    }
}
export const signUpUser = async (newUser, dispath) => {
    dispath(signUpStart());
    const res = await axios.post('http://localhost:3001/api/auth/signup', newUser);
    try {
        dispath(signUpSuccess(res.data));

    } catch (error) {
        dispath(signUpFailed());
    }
}