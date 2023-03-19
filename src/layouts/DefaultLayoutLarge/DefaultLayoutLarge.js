import classNames from "classnames/bind"
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import styles from './DefaultLayoutLarge.module.scss';

const cx = classNames.bind(styles);

function DefaultLayoutLarge({ children}) {
    return ( 
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('container')}>
                <Sidebar/>
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayoutLarge;