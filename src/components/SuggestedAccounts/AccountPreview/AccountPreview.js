import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import Button from "~/components/Button";
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    return ( 
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img 
                    className={cx('avatar')} 
                    src={data.avatar} 
                    alt=""/>
                <Button className={cx('btn')} primary>Follow</Button>
            </header>
            <section className={cx('body')}>
                <div className={cx('item-info')}>
                    <p className={cx('name')}>
                        <strong>{data.fullName}</strong>
                        {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle}/>}
                    </p>
                    <p className={cx('nickName')}>{data.nickName}</p>
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