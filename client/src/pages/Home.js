import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import RecentOpinions from '../components/RecentOpinions';
import LoginBox from '../components/LoginBox';
import PostOpinion from '../components/PostOpinion';
import AuthService from '../utils/auth';

const HomeContainer = styled.div`
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
                { !AuthService.loggedIn() && <PostOpinion /> }
            </MainContainer>
        </HomeContainer>
    );
};

export default Home;