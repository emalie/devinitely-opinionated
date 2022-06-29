import { gql } from '@apollo/client';

export const QUERY_OPINIONS = gql`
    query GetOpinions {
        opinions {
            createdAt
            opinionText
        }
    }
`;