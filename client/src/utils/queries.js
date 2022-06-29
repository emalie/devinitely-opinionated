import { gql } from '@apollo/client';

export const QUERY_OPINIONS = gql`
    query opinions {
        opinions {
            createdAt
            opinionText
        }
    }
`;