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
import { FormSignUp } from '~/components/Form';

const cx = classNames.bind(styles)



function Header() {

    const user = useSelector((state) => state.auth.login.currentUser?.data);

    const [originTitle] = useState(document.title);

    const [showForm, setShowForm] = useState(false);

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    }

    const handleLoginBtn = () => {
        setShowForm(true);        
    }

    useEffect(() => {
        if (showForm)
            document.title = "Login | My React Project";
        else
            document.title = originTitle;
    }, [showForm, originTitle])

    useEffect(() => {
        if (user) {
            setShowForm(false);
        }
    }, [user])

    const handleCloseForm = () => {
        setShowForm(false);
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
                                <Image className={cx('user-avatar')} src={user.avatar_url} alt="Nguyen van a"/>
                            ) : (
                                    <button className={cx('more-btn')}>
                                        <FontAwesomeIcon icon={faEllipsisVertical}/>
                                    </button>
                            )}
                        </Menu>    
                    </div>
            </div>
            <>
                 {showForm && (
                    <div className={cx('form')}>
                        <Overlay onClick={handleCloseForm}/>
                        <FormSignUp onClick={handleCloseForm}/>
                    </div>
                 )}   
            </>
        </header>
    </>

    );
}

export default Header;