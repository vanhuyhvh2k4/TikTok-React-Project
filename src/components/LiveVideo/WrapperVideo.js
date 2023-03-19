import classNames from "classnames/bind";

import styles from './LiveVideo.module.scss';

const cx = classNames.bind(styles);

function WrapperVideo({ children, className }) {
    return ( 
        <div className={cx('wrapper', { [className]: className })}>
            {children}
        </div>
     );
}

export default WrapperVideo;