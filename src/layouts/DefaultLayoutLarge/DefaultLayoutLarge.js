import classNames from "classnames/bind"
import Header from "../components/Header";
import SidebarForLive from "../components/Sidebar/SidebarForLive";

import styles from './DefaultLayoutLarge.module.scss';

const cx = classNames.bind(styles);

function DefaultLayoutLarge({ children}) {
    return ( 
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('container')}>
                <SidebarForLive noneTippy/>
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayoutLarge;