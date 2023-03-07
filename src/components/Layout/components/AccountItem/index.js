import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
const cx = classNames.bind(styles);

function AccountItem() {
    return <div className={cx('wrapper')}>
        <img className={cx('avatar')} src="https://images.unsplash.com/photo-1678153188688-0dc45722708a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt=""/>
        <div className={cx('info')}>
            <h4 className={cx('name')}>
                <span>nguyen van a</span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
            </h4>
            <span className={cx('username')}>nguyenvana</span>
        </div>
    </div>;
}

export default AccountItem;