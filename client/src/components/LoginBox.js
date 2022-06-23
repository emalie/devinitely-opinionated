import React from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
    grid-column: 3 / 4;
    background-color: var(--background-secondary);
    color: var(--color-secondary);
    box-shadow: 0 0 8px black;
    padding: 1.3rem;
    @media screen and (max-width: 1000px) {
        grid-column: 1 / 4;
    }
`;

const CardTitle = styled.h2`
    font-size: 2.5rem;
    padding: 1rem;
    width: 90%;
    border-bottom: 8px solid var(--color-tertiary);
`;

const SmallCardTitle = styled(CardTitle)`
    font-size: 1.5rem;
    border-bottom: 3px solid var(--color-tertiary);
    margin: 0;
    padding: 0 1rem 1rem 1rem;
`;

const CardBody = styled.p`
    font-size: 1.3rem;
    font-style: italic;
`;

const FlexContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center
`;

const LoginCard = styled.div`
    width: 80%;
    display: flex;
    flex-flow: column nowrap;
    padding: 2rem;
    margin: 1rem;
    box-shadow: 0 0 5px black;
    background-color: var(--color-primary);
`;

const LoginButton = styled.button`
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

const LoginBox = () => {
    return (
        <LoginContainer>
            <FlexContainer>
                <CardTitle>Join Us...</CardTitle>
                <LoginCard>
                    <SmallCardTitle>Company Account</SmallCardTitle>
                    <CardBody>Get advice on your company website -- just post a link and our developers will check it out!</CardBody>
                </LoginCard>
                <LoginCard>
                    <SmallCardTitle>Developer Account</SmallCardTitle>
                    <CardBody>Give advice on the websites posted here!</CardBody>
                </LoginCard>
                <LoginButton>Login / Signup</LoginButton>
            </FlexContainer>
        </LoginContainer>
    );
};

export default LoginBox;