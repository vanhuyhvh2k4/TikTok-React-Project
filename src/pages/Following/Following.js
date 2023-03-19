import { Helmet } from "react-helmet";

import Video from "~/components/Video";

const listData = [
    {
        avatar: 'https://robohash.org/officiispossimusprovident.jpg?size=100x100&set=set1',
        nickName: 'vanhuy',
        fullName: 'Ho Van Huy',
        tick: true,
        desc: 'dat villa mai dinh',
        song: 'doi quan o duoi day xa hoi',
        like: '5k',
        comment: '232',
        share: '100'
    },
    {
        avatar: 'https://robohash.org/officiispossimusprovident.jpg?size=100x100&set=set1',
        nickName: 'vanhuy',
        fullName: 'Ho Van Huy',
        tick: true,
        desc: 'dat villa mai dinh',
        song: 'doi quan o duoi day xa hoi',
        like: '5k',
        comment: '232',
        share: '100'
    },
]

function Following() {
    return ( 
        <>
        <Helmet>
            <title>TikTok Following | My React Project</title>
        </Helmet>
        <Video listData={listData} followingCustom/>
        </>
     );
}

export default Following;