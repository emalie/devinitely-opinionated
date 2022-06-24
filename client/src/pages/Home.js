import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import RecentOpinions from '../components/RecentOpinions';
import LoginBox from '../components/LoginBox';

const HomeContainer = styled.div`
    height: 100%;
    background: var(--background-primary);
`;

const MainContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.7rem;
    margin: 2rem;
    height: 75vh;
`;

const Home = () => {
    return (
        <HomeContainer>
            <Header />
            <MainContainer>
                <RecentOpinions />
                <LoginBox />
            </MainContainer>
        </HomeContainer>
    );
};

export default Home;