import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import {Link} from 'react-router-dom';

import styles from './Discover.module.scss';
import { HaskTag, Music } from '~/components/Icons';

const cx = classNames.bind(styles);
function DiscoverItem({ data }) {
    return ( 
        <Link to={data.keywordType ? `music/${data.keywordName}` : `tag/${data.keywordName}`} className={cx('item-wrapper')}>
            {data.keywordType ? <Music/> : <HaskTag/>}
            <span className={cx('label')}>{data.keywordName}</span>
        </Link>
    );
}

DiscoverItem.propTypes = {
    data: PropTypes.object.isRequired,
}

export default DiscoverItem;