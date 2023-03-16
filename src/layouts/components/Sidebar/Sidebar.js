import classNames from 'classnames/bind';
import { HomeIcon, HomeActiveIcon, LiveIcon, LiveActiveIcon, UserGroupIcon, UserGroupActiveIcon, HaskTag, Music } from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import config from '~/config';
import Discover from './Discover';
import Footer from './Footer';
import Menu, {MenuItem} from './Menu';
import styles from './Sidebar.module.scss';
import Button from '~/components/Button';
import { footer } from '~/data';

const cx = classNames.bind(styles);

const listDataOfDiscover = [
    {
        icon: <HaskTag/>,
        title: 'suthatla',
        type: 'tag'
    },
    {
        icon: <Music/>,
        title: 'Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng',
        type: 'music'
    },
    {
        icon: <Music/>,
        title: 'Thiên Thần Tình Yêu - RICKY STAR',
        type: 'music'
    },
    {
        icon: <HaskTag/>,
        title: '7749hieuung',
        type: 'tag'
    },
    {
        icon: <HaskTag/>,
        title: 'genzlife',
        type: 'tag'
    },
    {
        icon: <HaskTag/>,
        title: 'sansangthaydoi',
        type: 'tag'
    },
    {
        icon: <HaskTag/>,
        title: 'matkedoi',
        type: 'tag'
    },
    {
        icon: <Music/>,
        title: 'Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham',
        type: 'music'
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
    
                            <Footer listData={footer}/>
                        </div>
                        
                </PerfectScrollbar>
        </aside>
        )
}

export default Sidebar;