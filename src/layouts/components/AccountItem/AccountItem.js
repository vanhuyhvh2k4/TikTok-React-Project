import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import Image from "~/components/Image";
import styles from './AccountItem.module.scss'
const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
    <Link to={`/@${data.nickName}`} className={cx('wrapper')}>
        <Image className={cx('avatar')} src={data.avatar} alt=""/>
        <div className={cx('info')}>
            <h4 className={cx('name')}>
                <span>{data.fullName}</span>
                {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>}
            </h4>
            <span className={cx('username')}>{data.nickName}</span>
        </div>
    </Link>);
}

AccountItem.propTypes = {
    data : PropTypes.object.isRequired,
}

export default AccountItem;