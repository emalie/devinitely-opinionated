import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import styled from 'styled-components';

import Header from '../components/Header';
import auth from '../utils/auth';
import { LOGIN_USER, SIGNUP_USER } from '../utils/mutations';

const FormContainer = styled.div`
    background-color: var(--background-secondary);
    color: var(--color-secondary);
    width: 50%;
    margin: 5vh auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 8px black;
    @media screen and (max-width: 768px) {
        width: 90%;
    }
`;

const FormTitle = styled.h2`
    font-size: 2.5rem;
    padding: 1rem;
    width: 90%;
    border-bottom: 8px solid var(--color-tertiary);
    @media screen and (max-width: 768px) {
        width: 80%;
    }
`;

const Form = styled.form`
    margin: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

const SignupForm = styled(Form)`
    display: none;
`;

const FormInput = styled.input`
    padding: 0.8rem;
    margin: 0.5rem;
    font-size: 1.3rem;
`;

const FormSelect = styled.select`
    padding: 0.8rem;
    margin: 0.5rem;
    font-size: 1.3rem;
`;

const SubmitBtn = styled.button`
    padding: 1.3rem;
    margin: 1rem;
    font-size: 1.2rem;
    background-color: var(--color-primary);
    color: var(--color-secondary);
    border: none;
    border-radius: 18px;
    box-shadow: 0 0 8px black;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        background-color: var(--color-tertiary);
        color: black;
    }
`;

const Login = () => {
    const [loginFormState, setLoginFormState] = useState({ email: '', password: '' });
    const [signupFormState, setSignupFormState] = useState({ username: '', email: '', password: '', accountType: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const [loginShowing, setLoginShowing] = useState(true);

    const [loginUser] = useMutation(LOGIN_USER);
    const [signupUser] = useMutation(SIGNUP_USER);

    const handleSwitch = e => {
        e.preventDefault();

        setLoginShowing(!loginShowing);
    };

    const handleChange = e => {
        if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
        } else {
            setErrorMessage('');

            setLoginFormState({ ...loginFormState, [e.target.name]: e.target.value });
            setSignupFormState({ ...signupFormState, [e.target.name]: e.target.value });
            console.log(signupFormState);
        }
    };

    const handleLoginSubmit = async e => {
        e.preventDefault();

        if (loginFormState.email && loginFormState.password) {
            try {
                const { data } = await loginUser({ variables: loginFormState });
                console.log(data);
                auth.login(data.login.token);
            } catch (e) {
                console.error(e);
            }
        };
    };

    const handleSignupSubmit = async e => {
        e.preventDefault();
        console.log('submit');

        if (signupFormState.email && signupFormState.password && signupFormState.username) {
            try {
                const { data } = await signupUser({ variables: { email: signupFormState.email, username: signupFormState.username, password: signupFormState.password } });
                console.log(data);
                auth.login(data.addUser.token);
            } catch (e) {
                console.error(e);
            }
        };
    };

    return (
        <div>
            <Header />
            <FormContainer>
                <FormTitle>{loginShowing ? 'Login' : 'Sign Up'}</FormTitle>
                {loginShowing ? 
                <Form onSubmit={handleLoginSubmit}>
                    <FormInput type='email' name='email' defaultValue={loginFormState.email} placeholder='Email' onBlur={handleChange} />
                    <FormInput type='password' name='password' defaultValue={loginFormState.password} placeholder='Password' onBlur={handleChange} />
                    <SubmitBtn type='submit'>Submit</SubmitBtn>
                    {errorMessage && <p>{errorMessage}</p>}
                    <SubmitBtn onClick={handleSwitch}>Sign Up Instead</SubmitBtn>
                </Form>
                 :
                <Form onSubmit={handleSignupSubmit}>
                    <FormInput type='text' name='username' defaultValue={signupFormState.username} placeholder='Username' onBlur={handleChange} />
                    <FormInput type='text' name='email' defaultValue={signupFormState.email} placeholder='Email' onBlur={handleChange} />
                    <FormInput type='password' name='password' defaultValue={signupFormState.password} placeholder='Password' onBlur={handleChange} />
                    <FormSelect defaultValue={signupFormState.accountType} onBlur={handleChange}>
                        <option value='developer'>Developer</option>
                        <option value='company'>Company</option>
                    </FormSelect>
                    {errorMessage && <p>{errorMessage}</p>}
                    <SubmitBtn type='submit'>Submit</SubmitBtn>
                    <SubmitBtn onClick={handleSwitch}>Log In Instead</SubmitBtn>
                </Form> 
                }
            </FormContainer>
        </div>
    );
};

export default Login;