import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '../AccountItem';

const cx = classNames.bind(styles)

function Header() {

    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0)
    })

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="logo"/>
            </div>

                <Tippy
                    interactive
                    // check if have search result => display
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            <AccountItem></AccountItem>
                            <AccountItem></AccountItem>
                            <AccountItem></AccountItem>
                        </PopperWrapper>
                    </div>
                )}>

                    <div className={cx('search')}>
                        
                        <input placeholder='Search accounts and videos' spellCheck={false}/>
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark}/>
                        </button>
        
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>
        
                            <Tippy content='Search'>
                                <button className={cx('search-btn')}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                                </button>
                            </Tippy>
        
                    </div>
                </Tippy>
            <div className='actions'></div>
        </div>
    </header>
}

export default Header;