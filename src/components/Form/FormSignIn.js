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
import { loginUser } from '~/redux/apiRequest';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function FormSignUp({ onClick }) {

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const navigate = useNavigate();

    

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            email,
            password
        }

        loginUser(newUser, dispatch, navigate)
    }   

    return (   

        <>
            <InputWrapper method='post' className={cx('wrapper')} onClick={onClick} title='Login to TikTok' footerText="Don't have an account? " redirectText='Sign Up' onSubmit={handleSubmit}>
                <Input className={cx('input')} type='email' label='Email:' placeholder='Enter your email' name='email' id='email' icon={<User/>} onChange={e => setEmail(e.target.value)}/>
                <Input className={cx('input')} type='password' label='Password:' placeholder='Enter your password' name='password' id='password' icon={<FontAwesomeIcon icon={faKey}/>} onChange={e => setPassword(e.target.value)}/>
                <Button className={cx('button')} primary>Sign In</Button>
            </InputWrapper>
        </>
     );
}

FormSignUp.propTypes = {
    onClick: PropTypes.func,
}

export default FormSignUp;