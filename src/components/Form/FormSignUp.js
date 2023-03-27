import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFileSignature, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";

import Button from "../Button";
import { User } from "../Icons";
import styles from './Form.module.scss';
import Input from "./Input";
import InputWrapper from "./InputWrapper/InputWrapper";
import { signUpUser } from "~/redux/apiRequest";

const cx = classNames.bind(styles);

function FormSignUp({ onClick, onClickRedirect }) {
    const dispatch = useDispatch();

    const [fullName, setFullName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isFullNameEmpty, setIsFullNameEmpty] = useState(false);
    const [isUserNameEmpty, setIsUserNameEmpty] = useState(false);
    const [isEmailEmpty, setIsEmailEmpty] = useState(false);
    const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);

    const handleFullNameChange = (e) => {
        setFullName(e.target.value.trim());
        setIsFullNameEmpty(e.target.value.trim().length === 0);
    }

    const handleUserNameChange = (e) => {
        setUserName(e.target.value.trim());
        setIsUserNameEmpty(e.target.value.trim().length === 0);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value.trim());
        setIsEmailEmpty(e.target.value.trim().length === 0);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value.trim());
        setIsPasswordEmpty(e.target.value.trim().length === 0);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!fullName || !userName || !email || !password) {
            if (!fullName && !userName && !email && !password) {
                setIsFullNameEmpty(true);
                setIsUserNameEmpty(true);
                setIsEmailEmpty(true);
                setIsPasswordEmpty(true);
            }
            if (!fullName) {
                setIsFullNameEmpty(true);
            }
            if (!userName) {
                setIsUserNameEmpty(true);
            }
            if (!email) {
                setIsEmailEmpty(true);
            }
            if (!password) {
                setIsPasswordEmpty(true);
            }
        }
        else {
            const newUser = {
                fullName,
                userName,
                email,
                password,
            }
            signUpUser(newUser, dispatch);
        }
    }

    return ( 
        <>
            <InputWrapper title="Sign Up for TikTok" className={cx('wrapper')} footerText="Already have an account? " redirectText="Sign In" onClick={onClick} onClickRedirect={onClickRedirect} onSubmit={handleSubmit}>
                <Input label="Full Name" id="fullName" icon={<FontAwesomeIcon icon={faFileSignature}/>} onChange={handleFullNameChange} isEmpty={isFullNameEmpty} placeholder="Enter your full name"/>
                <Input label="User Name" id="userName" icon={<User/>} onChange={handleUserNameChange} isEmpty={isUserNameEmpty} placeholder="Enter user name"/>
                <Input label="Email" id="email" type="email" icon={<FontAwesomeIcon icon={faEnvelope}/>} onChange={handleEmailChange} isEmpty={isEmailEmpty} placeholder="Enter your email"/>
                <Input label="Password" id="password" type="password" icon={<FontAwesomeIcon icon={faKey}/>} onChange={handlePasswordChange} isEmpty={isPasswordEmpty} placeholder="Enter your password"/>
                <Button primary className={cx('button')}>Register</Button>
            </InputWrapper>
        </>
     );
}

FormSignUp.propTypes = {
    onClick: PropTypes.func,
    onClickRedirect: PropTypes.func
}

export default FormSignUp;