import classNames from 'classnames/bind';
import { HomeIcon, HomeActiveIcon, LiveIcon, LiveActiveIcon, UserGroupIcon, UserGroupActiveIcon } from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useDispatch } from 'react-redux';

import config from '~/config';
import Discover from './Discover';
import Footer from './Footer';
import Menu, {MenuItem} from './Menu';
import styles from './Sidebar.module.scss';
import Button from '~/components/Button';
import { footer } from '~/data';
import { useSelector } from 'react-redux';
import { showLogin } from '~/redux/authSlice';

const cx = classNames.bind(styles);

function Sidebar() {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.auth.login.currentUser?.data);

    const handleLoginBtn = () => {
        dispatch(showLogin());
    }

    return (
        <aside className={cx('wrapper')}>
                <PerfectScrollbar>
                        <div className={cx('content')}>
                            <Menu>
                                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon/>} activeIcon={<HomeActiveIcon/>}/>
                                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon/>} activeIcon={<UserGroupActiveIcon/>}/>
                                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon/>} activeIcon={<LiveActiveIcon/>}/>
                            </Menu>
    
                            {!user  ? (
                                <div className={cx('wrapper-no-login')}>
                                    <p>Log in to follow creators, like videos, and view comments.</p>
                                    <Button className={cx('login-btn')} outline large onClick={handleLoginBtn}>Login</Button>
                                </div>
                            ) : ("")}
                
                            <SuggestedAccounts label='Suggested accounts'/>
    
                            <Discover/>
    
                            <Footer listData={footer}/>
                        </div>
                </PerfectScrollbar>
        </aside>
        )
}

export default Sidebar;