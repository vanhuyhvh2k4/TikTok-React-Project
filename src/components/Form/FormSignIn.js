import { useState } from 'react';
import PropTypes from 'prop-types';
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";

import Button from "../Button";
import { User } from "../Icons";
import styles from './Form.module.scss';
import Input from "./Input";
import InputWrapper from "./InputWrapper/InputWrapper";
import * as authService from '~/services/authService';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function FormSignIn({ onClick, onClickRedirect }) {

    const isFetching = useSelector(state => state.auth.login?.isFetching);

    const isFailed = useSelector(state => state.auth.login?.error);

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [isEmailEmpty, setIsEmailEmpty] = useState(false);

    const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);

    const dispatch = useDispatch();

    const navigate = useNavigate();

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

        if (!email || !password) {
            if (!email && !password) {
                setIsEmailEmpty(true);
                setIsPasswordEmpty(true);
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
                email,
                password
            }
            
            const fetchApi = async () => {
                await authService.loginUser(newUser, dispatch, navigate)
            }
            fetchApi();
        }
    }   

    return (   

        <>
            <InputWrapper displayMessage={isFailed} message='Login Failed' loader={isFetching} method='post' className={cx('wrapper')} onClick={onClick} onClickRedirect={onClickRedirect} title='Login to TikTok' footerText="Don't have an account? " redirectText='Sign Up' onSubmit={handleSubmit}>
                <Input type='email' label='Email:' placeholder='Enter your email' name='email' id='email' icon={<User/>} onChange={handleEmailChange} isEmpty={isEmailEmpty}/>
                <Input type='password' label='Password:' placeholder='Enter your password' name='password' id='password' icon={<FontAwesomeIcon icon={faKey}/>} onChange={handlePasswordChange} isEmpty={isPasswordEmpty}/>
                <Button className={cx('button')} primary>Sign In</Button>
            </InputWrapper>
        </>
     );
}

FormSignIn.propTypes = {
    onClick: PropTypes.func,
    onClickRedirect: PropTypes.func,
}
export default FormSignIn;