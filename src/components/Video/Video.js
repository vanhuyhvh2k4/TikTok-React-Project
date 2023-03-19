import PropTypes from 'prop-types';
import classNames from "classnames/bind";

import styles from './Video.module.scss';
import VideoItem from "./VideoItem";

const cx = classNames.bind(styles);

function Video({ listData, followingCustom }) {
    return ( 
            <div className={cx('wrapper')}>
                {listData.map((data, index) => (
                    <VideoItem key={index} data={data} followingCustom={followingCustom ? true : false}/>
                ))}
            </div>
     );
}

Video.propTypes = {
    listData: PropTypes.array.isRequired,
    followingCustom: PropTypes.bool,
}
export default Video;