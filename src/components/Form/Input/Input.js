
import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function Input({ 
                id,
                className,
                required,
                noneIcon,
                label,
                icon, 
                name, 
                placeholder, 
                type,
                onChange,
            }) {
    return ( 
        <div className={cx('wrapper')}>
            <label htmlFor={id}>{label}</label>
            <div className={cx('wrapper-input')}>
                {!noneIcon && <div className={cx('icon')}>
                    {icon}
                </div>}
                <input className={cx({[className]: className})} id={id} name={name} placeholder={placeholder} type={type} onChange={onChange} spellCheck='false' required={required}/>
            </div>
        </div>
     );
}

Input.propTypes = {
    id: PropTypes.string.isRequired,
    classNames: PropTypes.string,
    noneIcon: PropTypes.bool,
    label: PropTypes.string.isRequired,
    icon: PropTypes.node,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func
}

export default Input;