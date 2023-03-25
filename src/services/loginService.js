import * as request from '~/utils/httpRequest';


export const login = async (data) => {
    try {
        const res = await request.post('auth/login', data)
        return res;
    } catch (error) {
        console.log(error);
    }
}