import { useEffect, useState } from 'react';
import classNames from "classnames/bind";
import PropTypes from 'prop-types';

import styles from './SuggestedAccounts.module.scss';
import AccountItem from "./AccountItem";
import * as suggestedAccountService from '~/services/suggestedAccountService';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
    const [suggestedAccount, setSuggestedAccount] = useState([]);
    const [numDisplayedAcc, setNumDisplayedAcc] = useState(5);
    const [initialNumAcc, setInitialNumAcc] = useState(5);

    useEffect(() => {
        const fetchApi = async () => {
            
            const result = await suggestedAccountService.suggestedAccount('less');
            setSuggestedAccount(result);

        }

        fetchApi();
    }, [])

    const handleSeeAllClick = () => {
        setNumDisplayedAcc(numDisplayedAcc + 5);
    }

    const handleSeeLessClick = () => {
        setNumDisplayedAcc(initialNumAcc);
    }

    return ( 
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {suggestedAccount.slice(0, numDisplayedAcc).map(account => (
                <AccountItem key={account._id} data={account}/>
            ))}
            {numDisplayedAcc < suggestedAccount.length ? (
                <>
                    <p className={cx('more-btn')} onClick={handleSeeAllClick}>See all</p>
                    {numDisplayedAcc > initialNumAcc && (
                        <p className={cx('less-btn')} onClick={handleSeeLessClick}>See less</p>
                    )}
                </>
            ) : (
                <p className={cx('less-btn')} onClick={handleSeeLessClick}>See less</p>
            )}
        </div>
     );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
}

export default SuggestedAccounts;