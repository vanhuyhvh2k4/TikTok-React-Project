import classNames from "classnames/bind";
import PropTypes from 'prop-types';

import styles from './LiveVideo.module.scss';

const cx = classNames.bind(styles);

function LiveVideo({ data, className, onPlay, onEnded, onPause }) {
    return ( 
        <div className={cx('item-wrapper', {[className]: className})}>
            <video 
            className={cx('video')} 
            onPlay={onPlay} 
            onPause={onPause}
            onEnded={onEnded} 
            autoPlay
            >
                <source src={data.src} type="video/mp4"></source>
            </video>
        </div>
     );
}

LiveVideo.propTypes = {
    data: PropTypes.object.isRequired,
    className: PropTypes.string,
    onPlay: PropTypes.func,
    onEnded: PropTypes.func,
}

export default LiveVideo;