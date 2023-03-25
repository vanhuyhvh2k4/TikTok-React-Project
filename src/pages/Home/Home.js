import { Helmet } from "react-helmet";
import Video from "~/components/Video";

function Home() {
    return ( 
        <>
        <Helmet>
            <title>TikTok For You | My React Project</title>
        </Helmet>
        <Video/>
        </>
     );
}

export default Home;