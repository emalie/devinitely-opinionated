import React from 'react';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';

import { QUERY_OPINIONS } from '../utils/queries';

const OpinionContainer = styled.div`
    grid-column: 1 / 3;
    background-color: var(--background-secondary);
    color: var(--color-secondary);
    box-shadow: 0 0 8px black;
    padding: 1.3rem;
    @media screen and (max-width: 1000px) {
        grid-column: 1 / 4;
        min-height: 70vh;
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
    const { loading, error, data } = useQuery(QUERY_OPINIONS);
    if (!loading) {
        console.log(data);
    }

    return (
        <OpinionContainer>
            <CardTitle>Recently Posted...</CardTitle>
            <Opinions>
                {data.opinions.map(opinion => (
                    <Opinion key={opinion._id}>
                        <OpinionTitle>Opinion on {opinion.createdAt}</OpinionTitle>
                        <OpinionBody>{opinion.opinionText}</OpinionBody>
                    </Opinion>
                ))}
            </Opinions>
        </OpinionContainer>
    );
};

export default RecentOpinions;