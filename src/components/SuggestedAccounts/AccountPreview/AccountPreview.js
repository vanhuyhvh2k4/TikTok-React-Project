import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import Button from "~/components/Button";
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview({ data, isFollow }) {
    return ( 
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Link to={`/@${data.userName}`}>
                    <img 
                        className={cx('avatar')} 
                        src={data.avatarUrl} 
                        alt=""/>
                </Link>
                    <>
                <Button className={cx('btn', {'following': isFollow})} outline={isFollow} primary={!isFollow}>{isFollow ? 'Following' : 'Follow'}</Button>
                </>
            </header>
            <section className={cx('body')}>
                    <div className={cx('item-info')}>
                        <Link to={`/@${data.userName}`}>
                            <p className={cx('nickName')}>
                                <strong>{data.userName}</strong>
                                {data.isTick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle}/>}
                            </p>
                            <p className={cx('name')}>{data.fullName}</p>
                        </Link>
                    </div>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>{data.numOfFollowers}M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>{data.numOfLikes}k </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </section>
        </div>
     );
}

AccountPreview.propTypes = {
    data: PropTypes.object.isRequired,
}

export default AccountPreview;