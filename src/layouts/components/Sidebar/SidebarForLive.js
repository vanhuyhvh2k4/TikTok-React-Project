import classNames from "classnames/bind";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Footer from "./Footer";
import Menu from "./Menu";
import { footer } from '~/data';

import styles from './SidebarForLive.module.scss';
import SuggestedAccounts from "~/components/SuggestedAccounts";

const cx = classNames.bind(styles);

function SidebarForLive({ noneTippy }) {
    return ( 
        <aside className={cx('wrapper')}>
            <PerfectScrollbar>
                        <div className={cx('content')}>
                            <Menu/>
    
                            <SuggestedAccounts noneTippy={noneTippy} label='Following'/>

                            <SuggestedAccounts noneTippy={noneTippy} label='Suggested hosts'/>
    
                            <Footer listData={footer}/>
                        </div>
                        
                </PerfectScrollbar>
        </aside>
     );
}

export default SidebarForLive;