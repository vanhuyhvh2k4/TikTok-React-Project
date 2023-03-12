import { useEffect, useState } from 'react';
import classNames from "classnames/bind";
import PropTypes from 'prop-types';

import styles from './SuggestedAccounts.module.scss';
import AccountItem from "./AccountItem";
import * as suggestedAccountService from '~/services/suggestedAccountService';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
    const [suggestedAccount, setSuggestedAccount] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            
            const result = await suggestedAccountService.suggestedAccount('less');
            setSuggestedAccount(result);

        }

        fetchApi();
    }, [])

    return ( 
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {suggestedAccount.map(account => (
                <AccountItem key={account._id} data={account}/>
            ))}
            <p className={cx('more-btn')}>See all</p>
        </div>
     );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
}

export default SuggestedAccounts;