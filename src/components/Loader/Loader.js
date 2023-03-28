import classNames from "classnames/bind";
import styles from './Loader.module.scss';

const cx = classNames.bind(styles);

function Loader() {
    return ( 
        <div className={cx('loader')}>
            <div className={cx('circle', {'left-circle': true})}></div>
            <div className={cx('circle', {'right-circle': true})}></div>
        </div>
     );
}

export default Loader;