import * as request from '~/utils/httpRequest';


export const homeVideo = async () => {
    try {
        const res = await request.get('home/video')
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const homeVideoLogin = async (accessToken) => {
    try {
        const res = await request.get('home/videoLogin', {
            headers: { token: `bearer ${accessToken}` }
        });
        return res.data;
    } catch (error) {
        return error;
    }
}

export const follow = async (accessToken, userIdFollowed, status) => {
    try {
        const res = await request.patch('home/follow', {
            userId: userIdFollowed,
            status
        }, {
            headers: { token: `bearer ${accessToken}`}
        });
        return res.data;
    } catch (error) {
        return error;
    }
}