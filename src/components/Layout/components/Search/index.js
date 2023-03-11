import {useEffect, useState, useRef} from 'react'
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
        faCircleXmark,
        faSpinner,
        faMagnifyingGlass, 
    } from '@fortawesome/free-solid-svg-icons';

import * as searchServices from '~/apiServices/searchServices';
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

        const fetchApi = async () => {
            setLoading(true)
            
            const result = await searchServices.search(debounce);
            setSearchResult(result)

            setLoading(false)
        }

        fetchApi();
    }, [debounce])

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleClearBtn = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResult([])
    }

    const handleHideResult = () => {
        setShowResult(false);
    }

    const handleChange = (e) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ') || searchValue.trim()) {
            setSearchValue(searchValue)
        }
        
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
                            onChange={handleChange}
                            onFocus={() => setShowResult(true)}
                            value={searchValue}
                            />
                            {!!searchValue && !loading && (
                                <button className={cx('clear')} onClick={handleClearBtn}>
                                    <FontAwesomeIcon icon={faCircleXmark}/>
                                </button>
                            )}
                            {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>}
            
                                    <button className={cx('search-btn')} onMouseDown={handleSubmit}>
                                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                                    </button>
            
                        </div>
            </HeadlessTippy>
        </div>
     );
}

export default Search;