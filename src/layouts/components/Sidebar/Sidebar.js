import classNames from 'classnames/bind';
import { HomeIcon, HomeActiveIcon, LiveIcon, LiveActiveIcon, UserGroupIcon, UserGroupActiveIcon, HaskTag, Music } from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import config from '~/config';
import Discover, { DiscoverItem } from './Discover';
import Footer from './Footer';
import Menu, {MenuItem} from './Menu';
import styles from './Sidebar.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const listDataOfDiscover = [
    {
        icon: <HaskTag/>,
        title: 'suthatla',
    },
    {
        icon: <Music/>,
        title: 'Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng',
    },
    {
        icon: <Music/>,
        title: 'Thiên Thần Tình Yêu - RICKY STAR',
    },
    {
        icon: <HaskTag/>,
        title: '7749hieuung',
    },
    {
        icon: <HaskTag/>,
        title: 'genzlife',
    },
    {
        icon: <HaskTag/>,
        title: 'sansangthaydoi',
    },
    {
        icon: <HaskTag/>,
        title: 'matkedoi',
    },
    {
        icon: <Music/>,
        title: 'Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham',
    },
]

function Sidebar() {
    const currentUser = false;

    return (
        <aside className={cx('wrapper')}>
                <PerfectScrollbar>
                        <div className={cx('content')}>
                            <Menu>
                                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon/>} activeIcon={<HomeActiveIcon/>}/>
                                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon/>} activeIcon={<UserGroupActiveIcon/>}/>
                                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon/>} activeIcon={<LiveActiveIcon/>}/>
                            </Menu>
    
                            {!currentUser  ? (
                                <div className={cx('wrapper-no-login')}>
                                    <p>Log in to follow creators, like videos, and view comments.</p>
                                    <Button className={cx('login-btn')} outline large>Login</Button>
                                </div>
                            ) : ("")}
                
                            <SuggestedAccounts label='Suggested accounts'/>
    
                            <Discover listData={listDataOfDiscover}/>
    
                            <Footer/>
                        </div>
                        
                </PerfectScrollbar>
        </aside>
        )
}

export default Sidebar;