import PropTypes from 'prop-types';
import classNames from "classnames/bind";

import { Close } from "../../Icons";
import styles from './InputWrapper.module.scss';
import Loader from '~/components/Loader';

const cx = classNames.bind(styles);

function InputWrapper({ 
                        title, 
                        children, 
                        redirectText, 
                        footerText, 
                        className, 
                        onClick,
                        onSubmit,
                        method,
                        onClickRedirect,
                        loader,
                        message,
                        displayMessage
                    }) {
    return ( 
        <div className={cx('wrapper', {[className]: className})}>
            {displayMessage && <div className={cx('message')}>{message}</div>}
            {loader && <div className={cx('loader')}>
                <Loader/>
            </div>}
            <div className={cx('icon')} onClick={onClick}>

                <Close/>
            </div>
            <header className={cx('header')}>
                <h2>{title}</h2>
            </header>
            <form method={method} className={cx('container')} onSubmit={onSubmit}>
                {children}
            </form>
            <footer className={cx('footer')}>
                <span className={cx('text')}>{footerText}<span className={cx('redirect')} onClick={onClickRedirect}>{redirectText}</span></span>
            </footer>
        </div>
     );
}

InputWrapper.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    redirectText: PropTypes.string,
    footerText: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    onSubmit: PropTypes.func,
    method: PropTypes.string,
    onClickRedirect: PropTypes.func,
    loader: PropTypes.bool,
    displayMessage: PropTypes.bool,
    message: PropTypes.string
}

export default InputWrapper;