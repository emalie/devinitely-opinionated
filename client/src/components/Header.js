import React from 'react';
import styled from 'styled-components';

import auth from '../utils/auth';

const HeaderStyled = styled.header`
background-color: var(--color-primary);
color: var(--color-secondary);
`;

const Anchor = styled.a`
color: var(--color-secondary);
text-decoration: none;
`;

const Title = styled.h1`
font-size: 2rem;
margin: 0;
padding: 1.5rem;
`;

const TitleSpan = styled.span`
color: var(--color-tertiary);
`;

const LogoutBtn = styled.h1`
    font-size: 1.5rem;
    margin: 0;
    padding: 1.5rem;
    color: var(--color-secondary);
    cursor: pointer;
`;

const Header = () => {
    const handleLogout = () => {
        auth.logout();
    }

    return (
        <HeaderStyled>
            <Anchor href='/'>
                <Title><TitleSpan>DEV</TitleSpan>INITELY OPINIONATED</Title>
            </Anchor>
            {!auth.loggedIn() && (
                <LogoutBtn onClick={handleLogout}>LOGOUT</LogoutBtn>
            )}
        </HeaderStyled>
    );
};

export default Header;