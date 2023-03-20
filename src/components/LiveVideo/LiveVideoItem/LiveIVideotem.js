import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import { forwardRef } from "react";

import styles from './LiveVideoItem.module.scss';

const cx = classNames.bind(styles);

const LiveItem = forwardRef(({ data, onPlay, onPause, onEnded, className }, ref) => {

    return (
            <video
                id={data.id}
                className={cx('video', { [className] : className})} 
                onPlay={onPlay} 
                onPause={onPause}
                onEnded={onEnded} 
                ref={ref}
            >
                <source src={data.src} type="video/mp4"></source>
            </video>
    );
})
LiveItem.propTypes = {
    id: PropTypes.number,
    data: PropTypes.object.isRequired,
    onPlay: PropTypes.func,
    onEnded: PropTypes.func,
    onPause: PropTypes.func,
}

export default LiveItem;