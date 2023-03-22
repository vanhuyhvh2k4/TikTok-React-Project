import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames/bind";

import * as homeVideoService from '~/services/homeVideoService';
import styles from './Video.module.scss';
import VideoItem from "./VideoItem";

const cx = classNames.bind(styles);

function Video({ followingCustom }) {
    const [homeVideos, setHomeVideos] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            
            const result = await homeVideoService.homeVideo();

            const renamedResult = result.map(({ 
                    video_description: videoDescription, 
                    video_url: videoUrl, 
                    avatar_url: avatarUrl, 
                    user_name: userName, 
                    full_name: fullName, 
                    is_tick: isTick 
                }) => ({
                    videoDescription,
                    videoUrl,
                    avatarUrl,
                    userName,
                    fullName,
                    isTick
            }))
            
            setHomeVideos(renamedResult);
        }

        fetchApi();
    }, [])

    return ( 
            <div className={cx('wrapper')}>
                {homeVideos.map((item, index) => (
                    <VideoItem key={index} data={item} followingCustom={followingCustom ? true : false}/>
                ))}
            </div>
     );
}

Video.propTypes = {
    followingCustom: PropTypes.bool,
}
export default Video;