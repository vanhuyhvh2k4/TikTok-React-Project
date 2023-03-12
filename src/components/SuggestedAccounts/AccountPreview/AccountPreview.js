import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import Button from "~/components/Button";
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return ( 
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img 
                    className={cx('avatar')} 
                    src="https://images.unsplash.com/photo-1678541192455-e1e96bdf1b9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" 
                    alt=""/>
                <Button primary>Follow</Button>
            </header>
            <section className={cx('body')}>
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>vanhuyit</strong>
                        <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle}/>
                    </p>
                    <p className={cx('name')}>Van Huy It</p>
                </div>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>531k </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </section>
        </div>
     );
}

export default AccountPreview;