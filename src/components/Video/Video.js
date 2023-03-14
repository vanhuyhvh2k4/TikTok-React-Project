import PropTypes from 'prop-types';
import classNames from "classnames/bind";

import styles from './Video.module.scss';
import VideoItem from "./VideoItem";

const cx = classNames.bind(styles);

function Video({ listData, shareData }) {
    return ( 
            <div className={cx('wrapper')}>
                <VideoItem listData={listData} shareData={shareData}/>
            </div>
     );
}

Video.propTypes = {
    listData: PropTypes.array.isRequired,
}
export default Video;