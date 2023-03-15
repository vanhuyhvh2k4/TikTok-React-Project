import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { MessageIcon, PlaneIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import config from '~/config'
import {menuHeader, userMenu} from '~/data'

const cx = classNames.bind(styles)



function Header() {

    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    }

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <Link to={config.routes.home} className={cx('logo')}>
                <img src={images.logo} alt="logo"/>
            </Link>

                <Search/>

                <div className={cx('actions')}>
                    {currentUser ? (
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
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : menuHeader} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image className={cx('user-avatar')} src='https://images.unsplash.com/photo-1678356188535-1c23c93b0746?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' alt="Nguyen van a"/>
                        ) : (
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical}/>
                                </button>
                        )}
                    </Menu>    
                </div>
        </div>
    </header>
}

export default Header;