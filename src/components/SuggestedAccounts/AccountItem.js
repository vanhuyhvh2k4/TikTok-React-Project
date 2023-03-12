import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';

import styles from './SuggestedAccounts.module.scss'
import { Wrapper as PopperWrapper } from '../Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles)

function AccountItem({ data }) {

    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview data={data}/>
                </PopperWrapper>
            </div>
        )
    }


    return ( 
        <div>
            <TippyHeadless
                offset={[-20, 0]}
                interactive
                delay={[800, 0]}
                placement='bottom'
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <img 
                        className={cx('avatar')}
                        src={data.avatar}
                        alt="imageUser"
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('name')}>
                            <strong>{data.fullName}</strong>
                            {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle}/>}
                        </p>
                        <p className={cx('nickname')}>{data.nickName}</p>
        
                    </div>
                </div>
            </TippyHeadless>
        </div>
     );
}

export default AccountItem;