import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import * as authService from '~/services/authService';
import { hideSignUp, showLogin } from "~/redux/authSlice";

const cx = classNames.bind(styles);

function FormSignUp({ onClick }) {
    const dispatch = useDispatch();
    const isFetching = useSelector(state => state.auth.signUp?.isFetching);

    const [fullName, setFullName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [usernameExists, setUsernameExists] = useState(false);
    const [emailExists, setEmailExists] = useState(false);

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

    const handleRedirectSignUp = () => {
        dispatch(hideSignUp());
        dispatch(showLogin());
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
        else if (usernameExists || emailExists) {
                if (usernameExists && emailExists) {
                    setUsernameExists(true)
                    setEmailExists(true);
                }
                if (usernameExists) {
                    setUsernameExists(true)
                }
                if (emailExists) {
                    setEmailExists(true);
                }
            }
            else{
                    const newUser = {
                        fullName,
                        userName,
                        email,
                        password,
                    }
                    const fetchApi = async () => {
                        await authService.signUpUser(newUser, dispatch)
                    }
                    fetchApi();
                    
                }
    }

    useEffect(() => {

        const fetchApi = async () => {
            const result = await authService.checkUser({userName})
            if (result.status === 200) {
                setUsernameExists(false);
            }
            else {
                setUsernameExists(true);
            }
        }

        fetchApi();
    }, [userName])

    useEffect(() => {
        const fetchApi = async () => {
            const result = await authService.checkEmail({email})
            if (result.status === 200) {
                setEmailExists(false);
            }
            else {
                setEmailExists(true);
            }
        }

        fetchApi();
    }, [email])

    return ( 
        <>
            <InputWrapper loader={isFetching} title="Sign Up for TikTok" className={cx('wrapper')} footerText="Already have an account? " redirectText="Sign In" onClick={onClick} onClickRedirect={handleRedirectSignUp} onSubmit={handleSubmit}>
                <Input label="Full Name" id="fullName" icon={<FontAwesomeIcon icon={faFileSignature}/>} onChange={handleFullNameChange} isEmpty={isFullNameEmpty} placeholder="Enter your full name"/>
                <Input label="User Name" id="userName" icon={<User/>} onChange={handleUserNameChange} isEmpty={isUserNameEmpty || usernameExists} noteMessage={usernameExists && 'User name is already in use'} placeholder="Enter user name"/>
                <Input label="Email" id="email" type="email" icon={<FontAwesomeIcon icon={faEnvelope}/>} onChange={handleEmailChange} isEmpty={isEmailEmpty || emailExists} noteMessage={emailExists && 'Email is already in use'} placeholder="Enter your email"/>
                <Input label="Password" id="password" type="password" icon={<FontAwesomeIcon icon={faKey}/>} onChange={handlePasswordChange} isEmpty={isPasswordEmpty} placeholder="Enter your password"/>
                <Button primary className={cx('button')}>Register</Button>
            </InputWrapper>
        </>
     );
}

FormSignUp.propTypes = {
    onClick: PropTypes.func,
}

export default FormSignUp;