import * as request from '~/utils/httpRequest';


export const suggestedAccount = async (type) => {
    try {
        const res = await request.get('users', {
            params: {
                type,
            }
        })
        return res.data;
    } catch (error) {
        console.log(error);
    }
}