import React from 'react';
import styled from 'styled-components';

const OpinionContainer = styled.div`
    grid-column: 1 / 3;
    background-color: var(--background-secondary);
    color: var(--color-secondary);
    box-shadow: 0 0 8px black;
    padding: 1.3rem;
`;

const CardTitle = styled.h2`
    font-size: 2.5rem;
    padding: 1rem;
    border-bottom: 8px solid var(--color-tertiary);
`;

const RecentOpinions = () => {
    return (
        <OpinionContainer>
            <CardTitle>Recent Opinions...</CardTitle>
        </OpinionContainer>
    );
};

export default RecentOpinions;