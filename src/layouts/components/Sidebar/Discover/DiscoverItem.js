import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from './Discover.module.scss';

const cx = classNames.bind(styles);
function DiscoverItem({ icon, label }) {
    return ( 
        <div href='google.com' className={cx('item-wrapper')}>
            {icon}
            <span className={cx('label')}>{label}</span>
        </div>
    );
}

DiscoverItem.propTypes = {
    icon: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
}

export default DiscoverItem;