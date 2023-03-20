import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon, UserGroupActiveIcon, UserGroupIcon } from "~/components/Icons";
import config from "~/config";
import MenuItem from './MenuItem';


const cx = classNames.bind(styles)

function Menu() {
    return ( 
        <nav className={cx('wrapper')}>
            <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon/>} activeIcon={<HomeActiveIcon/>}/>
            <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon/>} activeIcon={<UserGroupActiveIcon/>}/>
            <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon/>} activeIcon={<LiveActiveIcon/>}/>
        </nav>
     );
}

export default Menu;