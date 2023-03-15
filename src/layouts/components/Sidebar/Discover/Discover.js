import classNames from "classnames/bind";
import PropTypes from 'prop-types';

import styles from './Discover.module.scss';
import DiscoverItem from "./DiscoverItem";

const cx = classNames.bind(styles);

function Discover({ listData }) {
    return ( 
        <div className={cx('wrapper')}>
            <header className={cx('title')}>Discover</header>
            <div className={cx('wrapper-items')}>
                {listData.map((data, index) => (
                    <DiscoverItem key={index} data={data}/>
                ))}
            </div>
        </div>
     );
}

Discover.propTypes = {
    listData: PropTypes.array.isRequired,
}

export default Discover;