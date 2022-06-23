import React from 'react';
import styled from 'styled-components';

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

const Header = () => {
    return (
        <HeaderStyled>
            <Anchor href='/'>
                <Title><TitleSpan>DEV</TitleSpan>INITELY OPINIONATED</Title>
            </Anchor>
        </HeaderStyled>
    );
};

export default Header;