import React from 'react';
import styled from 'styled-components';

const OpinionContainer = styled.div`
    grid-column: 1 / 3;
    background-color: var(--background-secondary);
    color: var(--color-secondary);
    box-shadow: 0 0 8px black;
    padding: 1.3rem;
    @media screen and (max-width: 1000px) {
        grid-column: 1 / 4;
    }
    overflow: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const CardTitle = styled.h2`
    font-size: 2.5rem;
    padding: 1rem;
    border-bottom: 8px solid var(--color-tertiary);
`;

const Opinions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Opinion = styled.div`
    width: 80%;
    display: flex;
    flex-flow: column nowrap;
    padding: 2rem;
    margin: 0.7rem;
    box-shadow: 0 0 5px black;
    background-color: var(--color-primary);
`;

const OpinionTitle = styled.h2`
    font-size: 1.2rem;
    padding: 0 1rem 1rem 1rem;
    margin: 0;
    width: 90%;
    border-bottom: 3px solid var(--color-tertiary);
`;

const OpinionBody = styled.p`
    font-size: 1.1rem;
    font-weight: 300;
`;

const RecentOpinions = () => {
    const mockData = [
        {
            opinionText: 'Bla bla bla bla bla bla bla',
            createdAt: 'June 28, 2022',
            username: 'R3dRaccoon',
            accepted: false,
            _id: 'blablablab1'
        },
        {
            opinionText: 'Bla bla bla bla bla bla bla',
            createdAt: 'June 28, 2022',
            username: 'R3dRaccoon',
            accepted: false,
            _id: 'blablablab2'
        },
        {
            opinionText: 'Bla bla bla bla bla bla bla',
            createdAt: 'June 28, 2022',
            username: 'R3dRaccoon',
            accepted: false,
            _id: 'blablablab3'
        },
        {
            opinionText: 'Bla bla bla bla bla bla bla',
            createdAt: 'June 28, 2022',
            username: 'R3dRaccoon',
            accepted: false,
            _id: 'blablablab4'
        },
        {
            opinionText: 'Bla bla bla bla bla bla bla',
            createdAt: 'June 28, 2022',
            username: 'R3dRaccoon',
            accepted: false,
            _id: 'blablablab5'
        },
        {
            opinionText: 'Bla bla bla bla bla bla bla',
            createdAt: 'June 28, 2022',
            username: 'R3dRaccoon',
            accepted: false,
            _id: 'blablablab6'
        },
        {
            opinionText: 'Bla bla bla bla bla bla bla',
            createdAt: 'June 28, 2022',
            username: 'R3dRaccoon',
            accepted: false,
            _id: 'blablablab7'
        },
    ];

    return (
        <OpinionContainer>
            <CardTitle>Recently Posted...</CardTitle>
            <Opinions>
                {mockData.map(post => (
                    <Opinion key={post._id}>
                        <OpinionTitle>{post.username} on {post.createdAt}</OpinionTitle>
                        <OpinionBody>{post.opinionText}</OpinionBody>
                    </Opinion>
                ))}
            </Opinions>
        </OpinionContainer>
    );
};

export default RecentOpinions;