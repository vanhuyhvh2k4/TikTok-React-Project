import { useEffect, useState } from 'react';
import classNames from "classnames/bind";
import PropTypes from 'prop-types';

import styles from './SuggestedAccounts.module.scss';
import AccountItem from "./AccountItem";
import * as suggestedAccountService from '~/services/suggestedAccountService';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label, noneTippy }) {
    const initialNumAcc = 5;
    const [suggestedAccount, setSuggestedAccount] = useState([]);
    const [numDisplayedAcc, setNumDisplayedAcc] = useState(initialNumAcc);

    useEffect(() => {
        const fetchApi = async () => {
            
            const result = await suggestedAccountService.suggestedAccount();

            const renamedResult = result.map(({ user_name: userName, full_name: fullName,  avatar_url: avatarUrl, is_tick: isTick }) => ({
                userName,
                fullName,
                avatarUrl,
                isTick,
              }));

            setSuggestedAccount(renamedResult);

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
            {suggestedAccount.slice(0, numDisplayedAcc).map((account, index) => (
                <AccountItem noneTippy={noneTippy} key={index} data={account}/>
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