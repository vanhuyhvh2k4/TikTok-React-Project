import PropTypes from 'prop-types';
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";

import Button from "../Button";
import { User } from "../Icons";
import styles from './Form.module.scss';
import Input from "./Input";
import InputWrapper from "./InputWrapper/InputWrapper";

const cx = classNames.bind(styles);

function FormSignUp({ onClick }) {

    return (   
        <>
            <InputWrapper className={cx('wrapper')} onClick={onClick} title='Login to TikTok' footerText="Don't have an account? " redirectText='Sign Up'>
                <Input className={cx('input')} type='email' label='Email:' placeholder='Enter your email' name='email' id='email' icon={<User/>} required='true'/>
                <Input className={cx('input')} type='password' label='Password:' placeholder='Enter your password' name='password' id='password' icon={<FontAwesomeIcon icon={faKey}/>} required='true'/>
                <Button className={cx('button')} primary>Sign In</Button>
            </InputWrapper>
        </>
     );
}

FormSignUp.propTypes = {
    onClick: PropTypes.func,
}

export default FormSignUp;