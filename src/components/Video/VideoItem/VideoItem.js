import { useState } from "react";
import { faCheckCircle, faCode, faCommentDots, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import styles from './VideoItem.module.scss';
import Button from "~/components/Button";
import { Music } from "~/components/Icons";
import media from '~/assets/media';
import { Wrapper } from "~/components/Popper";


const cx = classNames.bind(styles);

function VideoItem() {
    const [heart, setHeart] = useState(false);

    const handleClickHeart = () => {
        setHeart(() => !heart);
    }

    const renderShare = () => (
        <Wrapper className={cx('share-wrapper')}>
            <div className={cx('share-item')}>
                <div>
                    <FontAwesomeIcon icon={faCode}/>
                </div>
                <span>Embed</span>
            </div>
        </Wrapper>
    )
    return ( <div className={cx('wrapper')}>
        <div className={cx('left')}>
            <img className={cx('avatar')} src='https://images.unsplash.com/photo-1678667590014-4769c04fc921?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' alt=''/>
        </div>
        <div className={cx('right')}>
            <header className={cx('header')}>
                <div className={cx('header-wrapper')}>
                    <span className={cx('user-info')}>
                        <h4 className={cx('nickName')}>datvilla94</h4>
                        <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle}/>
                        <span className={cx('name')}>Đạt Villa</span>
                    </span>
                    <p className={cx('desc')}>
                        <span>Xuống đáy xã hội thôi nào ae!</span>
                    </p>
                    
                    <p className={cx('song')}>
                        <Music width="1.3rem" height="1.5rem"/>
                        <strong>Đội quân ở dưới đáy xã hội</strong>
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
                    <span className={cx('action-wrapper', { 'active': heart })} onClick={handleClickHeart}>
                        <div className={cx('action-icon')}>
                            <FontAwesomeIcon icon={faHeart}/>
                        </div>
                        <span>5k</span>
                    </span>
                    <span className={cx('action-wrapper')}>
                        <div className={cx('action-icon')}>
                            <FontAwesomeIcon icon={faCommentDots}/>
                        </div>
                        <span>233</span>
                    </span>
                    <Tippy
                        visible
                        interactive
                        placement="top"
                        render={renderShare}
                    >
                        <span className={cx('action-wrapper')}>
                            <div className={cx('action-icon')}>
                                <FontAwesomeIcon icon={faShare}/>
                            </div>
                            <span>100</span>
                        </span>
                    </Tippy>
                </div>
            </section>
        </div>
    </div> );
}

export default VideoItem;