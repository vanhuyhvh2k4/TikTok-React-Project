import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';

import styles from './SuggestedAccounts.module.scss'
import { Wrapper as PopperWrapper } from '../Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles)

function AccountItem() {

    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview/>
                </PopperWrapper>
            </div>
        )
    }

    return ( 
        <div>
            <TippyHeadless
                offset={[-20, 0]}
                interactive
                delay={[1000, 0]}
                placement='bottom'
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <img 
                        className={cx('avatar')}
                        src='https://images.unsplash.com/photo-1678541192455-e1e96bdf1b9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>vanhuyit</strong>
                            <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle}/>
                        </p>
                        <p className={cx('name')}>Van Huy It</p>
        
                    </div>
                </div>
            </TippyHeadless>
        </div>
     );
}

export default AccountItem;