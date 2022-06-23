import React from 'react';
import styled from 'styled-components';

const Header = () => {
    const Header = styled.header`
        background-color: #343434;
        color: var(--color-primary);
    `;

    const Anchor = styled.a`
        color: var(--color-primary);
        text-decoration: none;
    `;

    const Title = styled.h1`
        font-size: 2rem;
        margin: 0;
        padding: 1.5rem;
    `;

    const TitleSpan = styled.span`
        color: var(--color-secondary);
    `;

    return (
        <Header>
            <Anchor href='/'>
                <Title><TitleSpan>DEV</TitleSpan>INITELY OPINIONATED</Title>
            </Anchor>
        </Header>
    );
};

export default Header;