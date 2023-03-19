import PropTypes from 'prop-types';
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
                <img 
                    className={cx('avatar')} 
                    src={data.avatar} 
                    alt=""/>
                <>
                <Button className={cx('btn', {'following': isFollow})} outline={isFollow} primary={!isFollow}>{isFollow ? 'Following' : 'Follow'}</Button>
                </>
            </header>
            <section className={cx('body')}>
                <div className={cx('item-info')}>
                    <p className={cx('nickName')}>
                        <strong>{data.nickName}</strong>
                        {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle}/>}
                    </p>
                    <p className={cx('name')}>{data.fullName}</p>
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