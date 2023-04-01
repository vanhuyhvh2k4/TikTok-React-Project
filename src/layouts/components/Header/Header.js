import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { MessageIcon, PlaneIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import config from '~/config'
import {menuHeader, userMenu} from '~/data'
import Overlay from '~/components/Overlay';
import { FormSignIn, FormSignUp } from '~/components/Form';

const cx = classNames.bind(styles)



function Header() {

    const user = useSelector((state) => state.auth.login.currentUser?.data);

    const statusSignUp = useSelector((state) => state.auth.signUp?.status);

    const [originTitle] = useState(document.title);

    const [showFormSignIn, setShowFormSignIn] = useState(false);

    const [showFormSignUp, setShowFormSignUp] = useState(false);

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    }

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
            setShowFormSignIn(!user)
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
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="logo"/>
                </Link>
    
                    <Search/>
    
                    <div className={cx('actions')}>
                        {user ? (
                            <>
                                <Tippy delay={[0, 200]} content="upload video" placement='bottom'>
                                    <button className={cx('action-btn')}>
                                        <UploadIcon/>
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 200]} content="Messages" placement='bottom'>
                                    <button className={cx('action-btn')}>
                                        <PlaneIcon/>
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 200]} content="Inbox" placement='bottom'>
                                    <button className={cx('action-btn')} data-content="60">
                                        <MessageIcon/>
                                    </button>
                                </Tippy>
                            </>
                        ) : (
                            <>
                                <Button text>Upload</Button>
                                <Button primary onClick={handleLoginBtn}>Log in</Button>
                            </>
                        )}
                        <Menu items={user ? userMenu : menuHeader} onChange={handleMenuChange}>
                            {user ? (
                                <Image className={cx('user-avatar')} src={user.avatar_url} alt="avatar user"/>
                            ) : (
                                    <button className={cx('more-btn')}>
                                        <FontAwesomeIcon icon={faEllipsisVertical}/>
                                    </button>
                            )}
                        </Menu>    
                    </div>
            </div>
            <>
                 {(showFormSignIn || showFormSignUp) && (
                    <div className={cx('form')}>
                        <Overlay onClick={handleCloseForm}/>
                        {(showFormSignIn && !showFormSignUp) && <FormSignIn onClick={handleCloseForm} onClickRedirect={handleRedirectLogin}/>}
                        {(showFormSignUp && !showFormSignIn) && < FormSignUp onClick={handleCloseForm} onClickRedirect={handleRedirectSignUp}/>}
                    </div>
                 )}   
            </>
        </header>
    </>

    );
}

export default Header;