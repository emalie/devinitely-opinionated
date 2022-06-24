import React from 'react';
import styled from 'styled-components';

const StyledSelector = styled.div`
    width: 18vw;
    height: 5vh;
    margin: 5vh auto;
    text-align: center;
    background-color: var(--background-secondary);
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
    position: static;
`;

const Selection = styled.p`
    cursor: pointer;
    color: var(--color-secondary);
    margin: 1rem;
    z-index: 3;
`;

const SelectorBg = styled.div`
    width: 6vw;
    height: 5vh;
    margin-left: 100px;
    border-radius: 20px;
    z-index: 2;
    background-color: var(--color-primary);
    position: absolute;
    right: calc(50% + 3vw);
    transform: translateX(11.8vw);
`;

const Selector = () => {
    return (
        <StyledSelector>
            <SelectorBg />
            <Selection>Login</Selection>
            <Selection>Signup</Selection>
        </StyledSelector>
    );
};

export default Selector;