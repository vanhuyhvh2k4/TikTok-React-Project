import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from './Discover.module.scss';

const cx = classNames.bind(styles);
function DiscoverItem({ data }) {
    return ( 
        <div href='google.com' className={cx('item-wrapper')}>
            {data.icon}
            <span className={cx('label')}>{data.title}</span>
        </div>
    );
}

DiscoverItem.propTypes = {
    data: PropTypes.object.isRequired,
}

export default DiscoverItem;