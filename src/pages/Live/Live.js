import 'tippy.js/dist/tippy.css';

import LiveVideo from '~/components/LiveVideo';
import media from "~/assets/media";

const listData = [
    {
        id: 1,
        src: media.video
    },
    {
        id: 2,
        src: media.video2
    },
]

function Live() {
    return (
        <>
            <LiveVideo listData={listData}/>
        </>
    );
}

export default Live;