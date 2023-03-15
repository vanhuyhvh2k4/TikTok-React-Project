import PropTypes from 'prop-types';
import classNames from "classnames/bind";

import styles from './Video.module.scss';
import VideoItem from "./VideoItem";

const cx = classNames.bind(styles);

function Video({ listData, shareData }) {
    return ( 
            <div className={cx('wrapper')}>
                {listData.map((data, index) => (
                    <VideoItem key={index} data={data} shareData={shareData}/>
                ))}
            </div>
     );
}

Video.propTypes = {
    listData: PropTypes.array.isRequired,
    shareData: PropTypes.array.isRequired,
}
export default Video;