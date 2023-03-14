import Video from "~/components/Video";
import { Embed, PlaneCircle, FacebookCircle, WhatAppCircle, Twitter } from "~/components/Icons";

const shareData = [
    {
        title: 'embed',
        icon: <Embed/>
    },
    {
        title: 'embed',
        icon: <PlaneCircle/>
    },
    {
        title: 'embed',
        icon: <FacebookCircle/>
    },
    {
        title: 'embed',
        icon: <WhatAppCircle/>
    },
    {
        title: 'embed',
        icon: <Twitter/>
    },
]

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

function Home() {
    return ( 
        <Video listData={listData} shareData={shareData}/>
     );
}

export default Home;