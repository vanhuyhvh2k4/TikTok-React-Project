import {useEffect, useState, useRef} from 'react'
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
        faCircleXmark,
        faSpinner,
        faMagnifyingGlass, 
    } from '@fortawesome/free-solid-svg-icons';

import * as searchServices from '~/services/searchService';
import AccountItem from '../AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
import TagItem from '../TagItem';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchUserResult, setSearchUserResult] = useState([]);
    const [searchKeywordResult, setSearchKeywordResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

const debounceValue = useDebounce(searchValue, 800);

    const inputRef = useRef()

    useEffect(() => {

        if (!debounceValue.trim()) {
            setSearchUserResult([])
            return;
        }

        const fetchApi = async () => {
            setLoading(true)
            
            const result = await searchServices.search(debounceValue);

            if (result) {
                const renamedUserResult = result.user.map(({ avatar_url: avatarUrl, user_name: userName, full_name: fullName, is_tick: isTick }) => ({
                    avatarUrl,
                    userName,
                    fullName,
                    isTick,
                }))
    
                const renamedKeywordResult = result.keyword.map(({ keyword_name: keywordName }) => ({
                    keywordName
                }))
                setSearchUserResult(renamedUserResult);
                setSearchKeywordResult(renamedKeywordResult);
            }
            else {
                setSearchUserResult([]);
                setSearchKeywordResult([]);
            }

            setLoading(false)
        }

        fetchApi();
    }, [debounceValue])

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleClearBtn = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchUserResult([]);
        setSearchKeywordResult([]);
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
                        visible={showResult && (searchUserResult.length > 0 || searchKeywordResult.length > 0)}
                        render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                {
                                    searchKeywordResult.length > 0 
                                        ?
                                    searchKeywordResult.map((result, index) => {
                                            return <TagItem key={index} data={result} />;
                                        })
                                        : 
                                    ''
                                }
                                {searchUserResult.length > 0 && <h4 className={cx('search-title')}>Accounts</h4>}
                                {
                                    searchUserResult.length > 0 
                                        ?
                                    searchUserResult.map((result, index) => {
                                    return <AccountItem key={index} data={result} />;
                                    })
                                        :
                                    ''
                                }
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