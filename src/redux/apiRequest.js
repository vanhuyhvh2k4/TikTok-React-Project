
import axios from "axios";
import { loginFailed, loginStart, loginSuccess } from "./authSlice";

export const loginUser = async (user, dispath, navigate) => {
    dispath(loginStart());
    try {
        const res = await axios.post('http://localhost:3001/api/auth/login', user)
        dispath(loginSuccess(res.data));
        navigate('/');
    } catch (error) {
        dispath(loginFailed());
    }
}