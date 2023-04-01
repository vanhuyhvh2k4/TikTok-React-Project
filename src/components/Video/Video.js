import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames/bind";

import * as homeVideoService from '~/services/homeVideoService';
import styles from './Video.module.scss';
import VideoItem from "./VideoItem";
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Video({ followingCustom }) {

    const accessToken = useSelector((state) => state.auth.login.currentUser?.access_token)

    const [homeVideos, setHomeVideos] = useState([]);

    const [homeVideosLogin, setHomeVideosLogin] = useState([]);

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

    useEffect(() => {
        const fetchApi = async () => {
            
            const result = await homeVideoService.homeVideoLogin(accessToken);
                    if (result.length > 0) {
                        const renamedResult = result.map(({ 
                                user_id: userId,
                                video_description: videoDescription, 
                                video_url: videoUrl, 
                                avatar_url: avatarUrl, 
                                user_name: userName, 
                                full_name: fullName, 
                                is_tick: isTick 
                            }) => ({
                                userId,
                                videoDescription,
                                videoUrl,
                                avatarUrl,
                                userName,
                                fullName,
                                isTick
                        }))
                        setHomeVideosLogin(renamedResult);
                    }
                    else {
                        console.log('you are not logged in');
                    }
        }

        fetchApi();
    }, [accessToken])

    return ( 
            <div className={cx('wrapper')}>
                {(homeVideosLogin.length !== 0 ? homeVideosLogin : homeVideos).map((item, index) => (
                    <VideoItem key={index} data={item} followingCustom={followingCustom ? true : false}/>
                ))}
            </div>
     );
}

Video.propTypes = {
    followingCustom: PropTypes.bool,
}
export default Video;