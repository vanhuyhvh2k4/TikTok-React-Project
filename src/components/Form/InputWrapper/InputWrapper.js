import PropTypes from 'prop-types';
import classNames from "classnames/bind";

import { Close } from "../../Icons";
import styles from './InputWrapper.module.scss';

const cx = classNames.bind(styles);

function InputWrapper({ 
                        title, 
                        children, 
                        redirectText, 
                        footerText, 
                        className, 
                        onClick,
                        onSubmit,
                        method
                    }) {
    return ( 
        <div className={cx('wrapper', {[className]: className})}>
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
                <span className={cx('text')}>{footerText}<span className={cx('redirect')}>{redirectText}</span></span>
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
    method: PropTypes.string
}

export default InputWrapper;