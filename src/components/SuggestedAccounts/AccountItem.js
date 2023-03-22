import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';

import styles from './SuggestedAccounts.module.scss'
import { Wrapper as PopperWrapper } from '../Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles)

function AccountItem({ data, noneTippy }) {

    if (noneTippy) {
        return (
            <div>
                <Link to={`@${data.nickName}`}>
                    <div className={cx('account-item')}>
                        <img 
                            className={cx('avatar', {'avatarLiveCustrom': true})}
                            src={data.avatar}
                            alt="imageUser"
                        />
                        <div className={cx('item-info', {'infoLiveCustom': true})}>
                            <p className={cx('name')}>
                                <strong>{data.nickName}</strong>
                                {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle}/>}
                            </p>
                            <p className={cx('nickname')}>{data.fullName}</p>           
                        </div>
                        <div className={cx('view')}>{data.numOfLikes}</div>
                    </div>
                </Link>
            </div>
        );
    }
    
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
                <Link to={`@${data.userName}`}>
                    <div className={cx('account-item')}>
                        <img 
                            className={cx('avatar')}
                            src={data.avatarUrl}
                            alt="imageUser"
                        />
                        <div className={cx('item-info')}>
                            <p className={cx('name')}>
                                <strong>{data.userName}</strong>
                                {data.isTick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle}/>}
                            </p>
                            <p className={cx('nickname')}>{data.fullName}</p>           
                        </div>
                    </div>
                </Link>
            </TippyHeadless>
        </div>
     );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
    noneTippy: PropTypes.bool,
}

export default AccountItem;