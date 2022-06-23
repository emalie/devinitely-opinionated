import React from 'react';
import styled from 'styled-components';

const OpinionContainer = styled.div`
    grid-column: 1 / 3;
`;

const RecentOpinions = () => {
    return (
        <OpinionContainer>Recent Opinions</OpinionContainer>
    );
};

export default RecentOpinions;