import Tippy from "@tippyjs/react";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";

import { Live, Loudspeaker, Mute, Pause, Play, Restart, UserGroupIconFill } from "../Icons";
import styles from './LiveVideo.module.scss';
import LiveItem from "./LiveVideoItem";

const cx = classNames.bind(styles);

function LiveVideo({ listData }) {
    const [videos, setVideos] = useState([]);
  
    useEffect(() => {
      // initialize videos state with default values
      setVideos(
        listData.map((data) => ({
          id: data.id,
          play: false,
          sound: true,
          autoPlay: true,
        }))
      );
    }, [listData]);
  
    const handlePlay = (index) => {
      const video = document.getElementById(videos[index].id);
      if (video.paused) {
        video.play();
        setVideos((prevVideos) =>
          prevVideos.map((video, i) =>
            i === index ? { ...video, play: true } : video
          )
        );
      } else {
        video.pause();
        setVideos((prevVideos) =>
          prevVideos.map((video, i) =>
            i === index ? { ...video, play: false } : video
          )
        );
      }
    };
  
    const handleSound = (index) => {
      const video = document.getElementById(videos[index].id);
      if (video.muted) {
        setVideos((prevVideos) =>
          prevVideos.map((video, i) =>
            i === index ? { ...video, sound: true } : video
          )
        );
        video.muted = false;
      } else {
        setVideos((prevVideos) =>
          prevVideos.map((video, i) =>
            i === index ? { ...video, sound: false } : video
          )
        );
        video.muted = true;
      }
    };
  
    const handleAutoPlay = (index) => {
      setVideos((prevVideos) =>
        prevVideos.map((video, i) =>
          i === index ? { ...video, autoPlay: !video.autoPlay } : video
        )
      );
    };
  
    const handleOnPlay = (index) => {
      setVideos((prevVideos) =>
        prevVideos.map((video, i) =>
          i === index ? { ...video, play: true } : video
        )
      );
    };
  
    const handleOnPause = (index) => {
      const video = document.getElementById(videos[index].id);
  
      if (videos[index].autoPlay && !video.ended) {
        setTimeout(() => {
          video.play();
        }, 2000);
      }
  
      setVideos((prevVideos) =>
        prevVideos.map((video, i) =>
          i === index ? { ...video, play: false } : video
        )
      );
    };
  
    const handleRetry = (index) => {
      const video = document.getElementById(videos[index].id);
  
      video.currentTime = 0;
      video.load();
    };
  
    return (
      <>
        <div className={cx("wrapper")}>
          {listData.map((data, index) => (
            <div key={index} className={cx("wrapper-item")}>
              <div className={cx("overlay")}>
                <div className={cx("line")}>
                  <span className={cx("line-icon")}></span>
                  <div>
                    <Live className={cx("live-icon")} />
                    <strong>Click to watch LIVE</strong>
                  </div>
                </div>
                <div className={cx("info")}>
                  <div className={cx("live")}>LIVE</div>
                  <div className={cx("group-name")}>
                    <strong>@who2-orii</strong>
                    <UserGroupIconFill
                      className={cx("user-group")}
                      width="1.4rem"
                      height="1.4rem"
                    />
                    <span>43</span>
                  </div>
                  <span className={cx("desc")}>descc</span>
                </div>
                <div className={cx("video-btn")}>
                  <div className={cx("left")}>
                    <Tippy
                      content={videos[index]?.play ? "Pause" : "Play"}
                      placement="top"
                    >
                      <div
                        className={cx("btn-control")}
                        style={{ display: "flex" }}
                        onClick={() => handlePlay(index)}
                      >
                        {videos[index]?.play ? (
                          <Play width="1.5rem" height="1.5rem" />
                        ) : (
                          <Pause width="1.5rem" height="1.5rem" />
                        )}
                      </div>
                    </Tippy>
                    <div
                      style={{ display: "flex" }}
                      onClick={() => handleRetry(index)}
                    >
                      <Restart width="1.5rem" height="1.5rem" />
                    </div>
                  </div>
                  <div className={cx("right")}>
                    <div
                      className={cx("auto-play", {
                        "autoPlay-custom": !videos[index]?.autoPlay,
                      })}
                      onClick={() => handleAutoPlay(index)}
                    >
                      <span>
                        Auto-play: <i>{videos[index]?.autoPlay ? "On" : "Off"}</i>
                      </span>
                    </div>
                    <div
                      style={{ display: "flex" }}
                      onClick={() => handleSound(index)}
                    >
                      {videos[index]?.sound ? (
                        <Loudspeaker width="1.5rem" height="1.5rem" />
                      ) : (
                        <Mute width="1.5rem" height="1.5rem" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <LiveItem
                className={cx("video")}
                onPause={() => handleOnPause(index)}
                onPlay={() => handleOnPlay(index)}
                data={data}
              />
            </div>
          ))}
        </div>
      </>
    );
  }
  
  export default LiveVideo;
  
