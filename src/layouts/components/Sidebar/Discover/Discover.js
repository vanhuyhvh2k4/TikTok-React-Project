import classNames from "classnames/bind";
import styles from './Discover.module.scss';

const cx = classNames.bind(styles);

function Discover({children}) {
    return ( 
        <div className={cx('wrapper')}>
            <header className={cx('title')}>Discover</header>
            <div className={cx('wrapper-items')}>{children}</div>
        </div>
     );
}

export default Discover;