import { useState } from "react";
import PropTypes from 'prop-types';
import { faCheckCircle, faChevronDown, faCommentDots, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import styles from './VideoItem.module.scss';
import Button from "~/components/Button";
import { Music } from "~/components/Icons";
import media from '~/assets/media';
import { Wrapper } from "~/components/Popper";
import AccountPreview from "~/components/SuggestedAccounts/AccountPreview";
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const datatest = {
    "_id": {
      "$oid": "640dd9f6b1c275d83ffa5b5c"
    },
    "firstName": "Deck",
    "lastName": "Lerven",
    "fullName": "Deck Lerven",
    "avatar": "https://robohash.org/doloreseapossimus.jpg?size=100x100&set=set1",
    "nickName": "dlerven3",
    "tick": true,
    "numOfFollowers": 20,
    "numOfLikes": 11
  }

function VideoItem({ data, shareData }) {
    const initialShare = 5;
    const [numDisplayShare, setNumDisplayShare] = useState(initialShare);
    const [heart, setHeart] = useState(false);

    const handleClickHeart = () => {
        setHeart(() => !heart);
    }

    const handleSeeMore = () => {
        setNumDisplayShare(shareData.length);
    }

    const handleHide = () => {
        setNumDisplayShare(initialShare)
    }

    const renderShare = () => (
        <Wrapper className={cx('share-wrapper')}>
            {shareData.slice(0, numDisplayShare).map((data, index) => (
                <Button key={index} className={cx('share-item')} leftIcon={data.icon}>{data.title}</Button>
            ))}

            {numDisplayShare < shareData.length &&  <div className={cx('seeMore-icon')} onClick={handleSeeMore}>
                    <FontAwesomeIcon icon={faChevronDown}/>
            </div>}
        </Wrapper>
    )

    const renderAccountPreview = () => (
        <Wrapper>
            <AccountPreview data={datatest}/>
        </Wrapper>
    )

    return ( 
            <div className={cx('wrapper')}>
                <div className={cx('left')}>
                    <Tippy 
                        interactive
                        placement="bottom-start"
                        offset={[-20, 10]}
                        delay={[800, 0]}
                        render={renderAccountPreview}
                    >
                            <Link className={cx('link')} to={`@${data.nickName}`}><img className={cx('avatar')} src={data.avatar} alt=''/></Link>
                    </Tippy>
                </div>
                <div className={cx('right')}>
                    <header className={cx('header')}>
                        <div className={cx('header-wrapper')}>
                                <div>
                                    <Tippy 
                                        interactive
                                        placement="bottom"
                                        offset={[-34, 40]}
                                        delay={[800, 0]}
                                        render={renderAccountPreview}
                                    >
                                        <Link className={cx('link')} to={`@${data.nickName}`}>
                                            <span className={cx('user-info')}>
                                                <h4 className={cx('nickName')}>{data.nickName}</h4>
                                                {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle}/>}
                                                <span className={cx('name')}>{data.fullName}</span>
                                            </span>
                                        </Link>
                                    </Tippy>
                                </div>
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
    shareData: PropTypes.array.isRequired,
}

export default VideoItem;