import * as request from '~/utils/httpRequest';


export const search = async (q) => {
    try {
        const res = await request.get('search/find', {
            params: {
                q,
            }
        })
        return res.data;
    } catch (error) {
        console.log(error);
    }
}
