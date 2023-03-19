import Tippy from "@tippyjs/react";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";

import { LiveIcon, Loudspeaker, Mute, Pause, Play, Restart, UserGroupIconFill } from "../Icons";
import styles from './LiveVideo.module.scss';
import LiveItem from "./LiveVideoItem";

const cx = classNames.bind(styles);


function LiveVideo({ listData }) {

    const [play, setPlay] = useState(true);
    const [sound, setSound] = useState(true);
    const [autoPlay, setAutoPlay] = useState(true);
    const videoRef = useRef(null);
    const timeoutRef = useRef(null);

    const handlePlay = () => {
        const video = videoRef.current;
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      };

    const handleOnPlay = () => {
        setPlay(true)
     }

    const handleOnPause = () => {
        const video = videoRef.current;

        setPlay(false);

        if (autoPlay  && !video.ended) {
            timeoutRef.current = setTimeout(() => {
                video.play();
            }, 20000);
        }
    }

    useEffect(() => {
        return () => {
           clearTimeout(timeoutRef.current);
        };
     }, []);

    const handleRetry = () => {
        const video = videoRef.current;

        video.currentTime = 0;
        video.load();
    }

    const handleSound = () => {
        const video = videoRef.current;
        if (video.muted) {
            setSound(true)
            video.muted = false;
        }
        else {
            setSound(false)
            video.muted = true;
        }
    }

    const handleAutoPlay = () => {
        setAutoPlay(() => !autoPlay);
    }
    
    return ( 
        
        <>
                    <div className={cx('wrapper')}>
                        {listData.map((data, index) => (
                            <div key={index} className={cx('wrapper-item')}>
                                <div className={cx('overlay')}>
                                    <div className={cx('line')}>
                                        <span className={cx('line-icon')}></span>
                                        <div>
                                            <LiveIcon className={cx('live-icon')}/>
                                            <strong>Click to watch LIVE</strong>
                                        </div>
                                    </div>
                                    <div className={cx('info')}>
                                        <div className={cx('live')}>LIVE</div>
                                        <div className={cx('group-name')}>
                                            <strong>@who2-orii</strong>
                                            <UserGroupIconFill className={cx('user-group')} width='1.4rem' height="1.4rem"/>
                                            <span>43</span>
                                        </div>
                                        <span className={cx('desc')}>descc</span>
                                    </div>
                                    <div className={cx('video-btn')}>
                                            <div className={cx('left')}>
                                                <Tippy content={play ? 'Pause' : 'Play'} placement="top">
                                                    <div className={cx('btn-control')} style={{display: "flex"}} onClick={handlePlay}>
                                                    {play ? <Play width="1.5rem" height="1.5rem"/> : <Pause width="1.5rem" height="1.5rem"/>}
                                                    </div>
                                                </Tippy>
                                                    <div style={{display: 'flex'}} onClick={handleRetry}><Restart width="1.5rem" height="1.5rem"/></div>
                                            </div>
                                        <div className={cx('right')}>
                                            <div className={cx('auto-play', {'autoPlay-custom' : !autoPlay})} onClick={handleAutoPlay}>
                                                <span>Auto-play: <i>{autoPlay ? 'On' : 'Off'}</i></span>
                                            </div>
                                            <div style={{display: "flex"}} onClick={handleSound}>
                                                {sound ? <Loudspeaker width="1.5rem" height="1.5rem"/> : <Mute width="1.5rem" height="1.5rem"/>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <LiveItem className={cx('video')} ref={videoRef} onPause={handleOnPause} onPlay={handleOnPlay} data={data}/>
                            </div>
                        ))}

                    </div>
        </>
     );
}

export default LiveVideo;