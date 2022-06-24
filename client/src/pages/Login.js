import React, { useState } from 'react';
import styled from 'styled-components';

import Header from '../components/Header';

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
    const [loginFormState, setLoginFormState] = useState({ username: '', password: '' });
    const [signupFormState, setSignupFormState] = useState({ username: '', email: '', password: '' });
    const [loginShowing, setLoginShowing] = useState(true);

    return (
        <div>
            <Header />
            <FormContainer>
                <FormTitle>{loginShowing ? 'Login' : 'Signup'}</FormTitle>
                {loginShowing ? 
                <Form>
                    <FormInput type='text' name='username' defaultValue={loginFormState.username} placeholder='Username' />
                    <FormInput type='password' name='password' defaultValue={loginFormState.username} placeholder='Password' />
                    <SubmitBtn type='submit'>Submit</SubmitBtn>
                </Form>
                 :
                <Form>
                    <FormInput type='text' name='signupUsername' defaultValue={signupFormState.username} placeholder='Username' />
                    <FormInput type='text' name='signupEmail' defaultValue={signupFormState.username} placeholder='Email' />
                    <FormInput type='password' name='signupPassword' defaultValue={signupFormState.username} placeholder='Password' />
                    <SubmitBtn type='submit'>Submit</SubmitBtn>
                </Form> 
                }
            </FormContainer>
        </div>
    );
};

export default Login;