import { useState } from "react";
import classNames from "classnames/bind";
import { Helmet } from "react-helmet";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Live.module.scss';
import WrapperVideo from "~/components/LiveVideo/WrapperVideo";
import LiveVideo from "~/components/LiveVideo";
import media from "~/assets/media";
import { Live as LiveIcon, Loudspeaker, Mute, Pause, Play, Restart, UserGroupIconFill } from "~/components/Icons";


const cx = classNames.bind(styles);

const data = {
    src: media.video2
}

function Live() {

    const [play, setPlay] = useState(true);
    const [sound, setSound] = useState(true);
    const [autoPlay, setAutoPlay] = useState(true);
    
    const handlePlay = () => {
        const video = document.querySelector('video');
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
        setPlay(false)
     }

    const handleSound = () => {
        const video = document.querySelector('video');
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
            <Helmet>
                <title>TikTok Live | My React Project</title>
            </Helmet>
        <WrapperVideo className={cx('wrapper')}>
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
                                <div style={{display: 'flex'}}><Restart width="1.5rem" height="1.5rem"/></div>
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
            <LiveVideo onPause={handleOnPause} onPlay={handleOnPlay} data={data} className={cx('video')}/>
        </WrapperVideo>
        </>
     );
}

export default Live;