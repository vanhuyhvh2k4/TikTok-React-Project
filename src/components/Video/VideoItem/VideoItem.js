import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { faCheckCircle, faChevronDown, faCommentDots, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import styles from './VideoItem.module.scss';
import Button from "~/components/Button";
import { Music } from "~/components/Icons";
import { Wrapper } from "~/components/Popper";
import AccountPreview from "~/components/SuggestedAccounts/AccountPreview";
import { Link } from 'react-router-dom';
import {menuOfShare} from '~/data'
import * as homeVideoService from "~/services/homeVideoService";
import { useDispatch, useSelector } from "react-redux";
import { showLogin } from "~/redux/authSlice";

const cx = classNames.bind(styles);

function VideoItem({ data, followingCustom }) {
    const initialShare = 5;
    const [numDisplayShare, setNumDisplayShare] = useState(initialShare);
    const [heart, setHeart] = useState(false);
    const [follow, setFollow] = useState(false);
    const handleClickHeart = () => {
        setHeart(() => !heart);
    }
    const dispatch = useDispatch();
    const accessToken = useSelector(state => state.auth.login.currentUser?.access_token);

    const handleSeeMore = () => {
        setNumDisplayShare(menuOfShare.length);
    }

    const handleClickFollow = () => {
        if (!accessToken) {
            dispatch(showLogin());
        }
        else {
            setFollow(() => !follow);
        }
    }

    useEffect(() => {
        if (follow) {
            const fetchApi = async () => {
                 await homeVideoService.follow(accessToken, data.userId, true);
            }
            fetchApi();
        }
        else {
            const fetchApi = async () => {
                await homeVideoService.follow(accessToken, data.userId, false);
            }
            fetchApi();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [follow])

    const handleHide = () => {
        setNumDisplayShare(initialShare)
    }

    const renderShare = () => (
        <Wrapper className={cx('share-wrapper')}>
            {menuOfShare.slice(0, numDisplayShare).map((data, index) => (
                <Button key={index} className={cx('share-item')} leftIcon={data.icon}>{data.title}</Button>
            ))}

            {numDisplayShare < menuOfShare.length &&  <div className={cx('seeMore-icon')} onClick={handleSeeMore}>
                    <FontAwesomeIcon icon={faChevronDown}/>
            </div>}
        </Wrapper>
    )

    const renderAccountPreview = () => (
        <Wrapper>
            <AccountPreview data={data} isFollow={follow}/>
        </Wrapper>
    )

    return ( 
            <div className={cx('wrapper')}>
                <div className={cx('left')}>
                    <Tippy 
                        interactive
                        placement="bottom-start"
                        offset={[-20, 10]}
                        delay={[800, 500]}
                        render={renderAccountPreview}
                    >
                            <Link className={cx('link')} to={`@${data.userName}`}><img className={cx('avatar')} src={data.avatarUrl} alt=''/></Link>
                    </Tippy>
                </div>
                <div className={cx('right')}>
                    <header className={cx('header')}>
                        <div className={cx('header-wrapper')}>
                                <div className={cx('link-wrapper')}>
                                    <Tippy 
                                        interactive
                                        placement="bottom"
                                        offset={[-34, 44]}
                                        delay={[800, 500]}
                                        render={renderAccountPreview}
                                    >
                                        <Link className={cx('link')} to={`@${data.userName}`}>
                                            <span className={cx('user-info')}>
                                                <h4 className={cx('nickName')}>{data.userName}</h4>
                                                {data.isTick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle}/>}
                                                <span className={cx('name')}>{data.fullName}</span>
                                            </span>
                                        </Link>
                                    </Tippy>
                                    {followingCustom && <small className={cx('time')}>&ensp;-&ensp;11h ago</small>}
                                </div>
                            <p className={cx('desc')}>
                                <span>{data.videoDescription}</span>
                            </p>
                            
                            <p className={cx('song')}>
                                <Music width="1.3rem" height="1.5rem"/>
                                <strong>{data.song}</strong>
                            </p>
                        </div>
                        {!followingCustom && <Button className={cx('follow-btn', {'following': follow})} small outline onClick={handleClickFollow}>{follow ? 'Following' : 'Follow'}</Button>}
                    </header>
                    <section className={cx('body')}>
                        <video className={cx('video')} controls>
                            <source src={data.videoUrl} type="video/mp4" />
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
                                onHide={handleHide}
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
    );
}

VideoItem.propTypes = {
    data: PropTypes.object.isRequired,
    followingCustom: PropTypes.bool,
}

export default VideoItem;