import 'tippy.js/dist/tippy.css';

import LiveVideo from '~/components/LiveVideo';
import media from "~/assets/media";
import { Helmet } from 'react-helmet';

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
            <Helmet>
                <title>TikTok Live | My React Project</title>
            </Helmet>
            <LiveVideo listData={listData}/>
        </>
    );
}

export default Live;