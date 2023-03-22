import * as request from '~/utils/httpRequest';


export const homeVideo = async () => {
    try {
        const res = await request.get('home/video')
        return res.data;
    } catch (error) {
        console.log(error);
    }
}