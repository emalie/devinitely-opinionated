import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation LoginUser($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
        }
    }
`;

export const SIGNUP_USER = gql`
    mutation SignupUser($email: String!, $password: String!, $username: String!) {
        addUser(email: $email, username: $username, password: $password) {
            token
        }
    }
`;