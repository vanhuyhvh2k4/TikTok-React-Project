
import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function Input({ 
                id,
                className,
                isRequired,
                isEmpty,
                noneIcon,
                label,
                icon, 
                name, 
                placeholder, 
                type,
                onChange,
                noteMessage,
                value
            }) {
    return ( 
        <div className={cx('wrapper')}>
            <label htmlFor={id}>{label}</label>
            <div className={cx('wrapper-input')}>
                {!noneIcon && <div className={cx('icon')}>
                    {icon}
                </div>}
                <input value={value} className={cx({[className]: className})} id={id} name={name} placeholder={placeholder} type={type} onChange={onChange} spellCheck='false' required={isRequired ? true : false}/>
            </div>
            {isEmpty && <small className={cx('message')}>{noteMessage || 'Please fill out this field'}</small>}
        </div>
     );
}

Input.propTypes = {
    id: PropTypes.string.isRequired,
    classNames: PropTypes.string,
    noneIcon: PropTypes.bool,
    label: PropTypes.string.isRequired,
    icon: PropTypes.node,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    isRequired: PropTypes.bool,
    noteMessage: PropTypes.string,
    value: PropTypes.string

}

export default Input;