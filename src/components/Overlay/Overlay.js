import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from './Overlay.module.scss';

const cx = classNames.bind(styles);

function Overlay({ children , onClick, className }) {
    return ( 
        <div className={cx('wrapper', {[className]: className})} onClick={onClick}>
            {children}
        </div>
     );
}

Overlay.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string
}

export default Overlay;