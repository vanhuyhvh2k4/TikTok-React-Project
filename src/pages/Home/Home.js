import Video from "~/components/Video";
import { menuOfShare } from '~/data'


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
        <Video listData={listData} shareData={menuOfShare}/>
     );
}

export default Home;