import classNames from "classnames/bind";

import styles from './Video.module.scss';
import VideoItem from "./VideoItem";

const cx = classNames.bind(styles);

function Video({ children }) {
    return ( 
        <div className={cx('wrapper')}>
            <VideoItem/>
        </div>
     );
}
export default Video;