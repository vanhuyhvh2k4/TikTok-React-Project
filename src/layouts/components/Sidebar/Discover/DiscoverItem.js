import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import {Link} from 'react-router-dom';

import styles from './Discover.module.scss';

const cx = classNames.bind(styles);
function DiscoverItem({ data }) {
    return ( 
        <Link to={data.type === 'tag' ? `tag/${data.title}` : `music/${data.title}`} className={cx('item-wrapper')}>
            {data.icon}
            <span className={cx('label')}>{data.title}</span>
        </Link>
    );
}

DiscoverItem.propTypes = {
    data: PropTypes.object.isRequired,
}

export default DiscoverItem;