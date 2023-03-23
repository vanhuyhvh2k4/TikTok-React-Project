import * as request from '~/utils/httpRequest';


export const discover = async () => {
    try {
        const res = await request.get('sidebar/discover');
        return res.data;
    } catch (error) {
        console.log(error);
    }
}