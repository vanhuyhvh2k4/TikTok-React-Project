import {useEffect, useState, useRef} from 'react'
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
        faCircleXmark,
        faSpinner,
        faMagnifyingGlass, 
    } from '@fortawesome/free-solid-svg-icons';

import AccountItem from '../AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

const debounce = useDebounce(searchValue, 800);

    const inputRef = useRef()

    useEffect(() => {

        if (!debounce.trim()) {
            setSearchResult([])
            return;
        }

        setLoading(true);

        setTimeout(() => {
            fetch(`http://localhost:3001/news?q=${encodeURIComponent(searchValue)}`)
                .then(res => res.json())
                .then(res => {
                    setSearchResult(res.data)
                    setLoading(false)
                })
                .catch(() => {
                    setLoading(false)
                })
        }, 0)
    }, [debounce])

    const handleClearBtn = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResult([])
    }

    const handleHideResult = () => {
        setShowResult(false);
    }
    return ( 
        <div>
            <HeadlessTippy
                        interactive
                        onClickOutside={handleHideResult}
                        // check if have search result => display
                        visible={showResult && searchResult.length > 0}
                        render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                {searchResult.map(result => (
                                    <AccountItem key={result._id} data={result}></AccountItem>
                                ))}
                            </PopperWrapper>
                        </div>
                    )}>
    
                        <div className={cx('search')}>
                            
                            <input 
                            ref={inputRef}
                            placeholder='Search accounts and videos' 
                            spellCheck={false} 
                            onChange={e => setSearchValue(e.target.value)}
                            onFocus={() => setShowResult(true)}
                            value={searchValue}
                            />
                            {!!searchValue && !loading && (
                                <button className={cx('clear')} onClick={handleClearBtn}>
                                    <FontAwesomeIcon icon={faCircleXmark}/>
                                </button>
                            )}
                            {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>}
            
                                    <button className={cx('search-btn')}>
                                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                                    </button>
            
                        </div>
            </HeadlessTippy>
        </div>
     );
}

export default Search;