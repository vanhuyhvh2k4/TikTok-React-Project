import { useState } from "react";
import PropTypes from 'prop-types';
import { faCheckCircle, faCommentDots, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import styles from './VideoItem.module.scss';
import Button from "~/components/Button";
import { Music } from "~/components/Icons";
import media from '~/assets/media';
import { Wrapper } from "~/components/Popper";


const cx = classNames.bind(styles);

function VideoItem({ listData, shareData }) {
    const [heart, setHeart] = useState(false);

    const handleClickHeart = () => {
        setHeart(() => !heart);
    }

    const renderShare = () => (
        <Wrapper className={cx('share-wrapper')}>
            {shareData.map((data, index) => (
                <Button key={index} className={cx('share-item')} leftIcon={data.icon}>{data.title}</Button>
            ))}
        </Wrapper>
    )
    return ( 
        listData.map((data, index) => (
            <div key={index} className={cx('wrapper')}>
                <div className={cx('left')}>
                    <img className={cx('avatar')} src={data.avatar} alt=''/>
                </div>
                <div className={cx('right')}>
                    <header className={cx('header')}>
                        <div className={cx('header-wrapper')}>
                            <span className={cx('user-info')}>
                                <h4 className={cx('nickName')}>{data.nickName}</h4>
                                {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle}/>}
                                <span className={cx('name')}>{data.fullName}</span>
                            </span>
                            <p className={cx('desc')}>
                                <span>{data.desc}</span>
                            </p>
                            
                            <p className={cx('song')}>
                                <Music width="1.3rem" height="1.5rem"/>
                                <strong>{data.song}</strong>
                            </p>
                        </div>
                        <Button className={cx('follow-btn')} small outline>Follow</Button>
                    </header>
                    <section className={cx('body')}>
                        <video className={cx('video')} controls>
                            <source src={media.video} type="video/mp4" />
                        Your browser does not support the video tag.
                        </video>
                        <div className={cx('action')}>
                            <div className={cx('action-wrapper', { 'active': heart })} onClick={handleClickHeart}>
                                <div className={cx('action-icon')}>
                                    <FontAwesomeIcon icon={faHeart}/>
                                </div>
                                <span>{data.like}</span>
                            </div>
                            <div className={cx('action-wrapper')}>
                                <div className={cx('action-icon')}>
                                    <FontAwesomeIcon icon={faCommentDots}/>
                                </div>
                                <span>{data.comment}</span>
                            </div>
                            <Tippy
                                interactive
                                offset={[100, 20]}
                                placement="top"
                                render={renderShare}
                                delay={[0, 500]}
                            >
                                <div className={cx('action-wrapper')}>
                                    <div className={cx('action-icon')}>
                                        <FontAwesomeIcon icon={faShare}/>
                                    </div>
                                    <span>{data.share}</span>
                                </div>
                            </Tippy>
                        </div>
                    </section>
                </div>
            </div> 
        ))
    );
}

VideoItem.propTypes = {
    listData: PropTypes.array.isRequired,
    shareData: PropTypes.any.isRequired,
}

export default VideoItem;