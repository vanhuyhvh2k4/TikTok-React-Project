import classNames from 'classnames/bind';
import { HomeIcon, HomeActiveIcon, LiveIcon, LiveActiveIcon, UserGroupIcon, UserGroupActiveIcon, HaskTag, Music } from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import config from '~/config';
import Discover, { DiscoverItem } from './Discover';
import Footer from './Footer';
import Menu, {MenuItem} from './Menu';

import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
                <PerfectScrollbar>
                        <Menu>
                            <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon/>} activeIcon={<HomeActiveIcon/>}/>
                            <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon/>} activeIcon={<UserGroupActiveIcon/>}/>
                            <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon/>} activeIcon={<LiveActiveIcon/>}/>
                        </Menu>
            
                        <SuggestedAccounts label='Suggested accounts'/>
                        <Discover>
                            <DiscoverItem icon={<HaskTag/>} label='suthatla'/>
                            <DiscoverItem icon={<Music/>} label='Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng'/>
                            <DiscoverItem icon={<Music/>} label='Thiên Thần Tình Yêu - RICKY STAR'/>
                            <DiscoverItem icon={<HaskTag/>} label='7749hieuung'/>
                            <DiscoverItem icon={<HaskTag/>} label='genzlife'/>
                            <DiscoverItem icon={<Music/>} label='Thiên Thần Tình Yêu - RICKY STAR'/>
                            <DiscoverItem icon={<HaskTag/>} label='sansangthaydoi'/>
                            <DiscoverItem icon={<HaskTag/>} label='matkedoi'/>
                            <DiscoverItem icon={<Music/>} label='Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham'/>
                        </Discover>
            
                        <Footer/>
                </PerfectScrollbar>
        </aside>
        )
}

export default Sidebar;