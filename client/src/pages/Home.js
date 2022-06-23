import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';

const HomeContainer = styled.div`
    height: 100%;
    background: var(--background-primary);
`;

const Home = () => {
    return (
        <HomeContainer>
            <Header />
        </HomeContainer>
    );
};

export default Home;