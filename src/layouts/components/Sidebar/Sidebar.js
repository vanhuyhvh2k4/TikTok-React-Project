import classNames from 'classnames/bind';
import { HomeIcon, HomeActiveIcon, LiveIcon, LiveActiveIcon, UserGroupIcon, UserGroupActiveIcon } from '~/components/Icons';
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
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Overlay from '~/components/Overlay';
import { FormSignIn, FormSignUp } from '~/components/Form';

const cx = classNames.bind(styles);

function Sidebar() {

    const user = useSelector((state) => state.auth.login.currentUser?.data);

    const statusSignUp = useSelector((state) => state.auth.signUp?.status);

    const [originTitle] = useState(document.title);

    const [showFormSignIn, setShowFormSignIn] = useState(false);

    const [showFormSignUp, setShowFormSignUp] = useState(false);

    const handleLoginBtn = () => {
        setShowFormSignIn(true);        
    }

    const handleRedirectLogin = () => {
        setShowFormSignUp(true);
        setShowFormSignIn(false);
    }

    const handleRedirectSignUp = () => {
        setShowFormSignUp(false);
        setShowFormSignIn(true);
    }

    useEffect(() => {
        if (showFormSignIn)
            document.title = "Login | My React Project";
        else if (showFormSignUp)
            document.title = "Sign Up | My React Project";
            else
                document.title = originTitle;
    }, [showFormSignIn, showFormSignUp, originTitle])

    useEffect(() => {
        if (user) {
            setShowFormSignIn(false);
        }
    }, [user])

    useEffect(() => {
        if (statusSignUp === 'success') {
            setShowFormSignUp(false);
            setShowFormSignIn(true);
        }
    }, [statusSignUp])

    const handleCloseForm = () => {
        setShowFormSignIn(false);
        setShowFormSignUp(false);
    }

    return (
        <>
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
                 {(showFormSignIn || showFormSignUp) && (
                    <div className={cx('form')}>
                        <Overlay onClick={handleCloseForm}/>
                        {(showFormSignIn && !showFormSignUp) && <FormSignIn onClick={handleCloseForm} onClickRedirect={handleRedirectLogin}/>}
                        {(showFormSignUp && !showFormSignIn) && < FormSignUp onClick={handleCloseForm} onClickRedirect={handleRedirectSignUp}/>}
                    </div>
                 )}   
            </>
        )
}

export default Sidebar;