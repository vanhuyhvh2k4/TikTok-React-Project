import * as request from '~/utils/httpRequest';


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