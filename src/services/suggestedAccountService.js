import * as request from '~/utils/httpRequest';


export const suggestedAccount = async () => {
    try {
        const res = await request.get('sidebar/suggestedaccounts/')
        return res.data;
    } catch (error) {
        console.log(error);
    }
}