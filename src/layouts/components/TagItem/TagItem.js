
import classNames from "classnames/bind";

import { SearchIcon } from "~/components/Icons";
import styles from './TagItem.module.scss';

const cx = classNames.bind(styles);

function TagItem({ data }) {
    return ( 
        <div className={cx('wrapper')}>
            <SearchIcon width='1.4rem' height='1.4rem'/>
            <span className={cx('text')}>{data.keywordName}</span>
        </div>
     );
}

export default TagItem;