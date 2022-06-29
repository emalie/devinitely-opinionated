import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import styled from 'styled-components';

import { ADD_OPINION } from '../utils/mutations';

const PostOpinionContainer = styled.div`
    grid-column: 1 / 4;
    grid-row: 2;
    background-color: var(--background-secondary);
    color: var(--color-secondary);
    box-shadow: 0 0 8px black;
    padding: 1.3rem;
    @media screen and (max-width: 1000px) {
        grid-column: 1 / 4;
        min-height: 50vh;
    }
`;

const CardTitle = styled.h2`
    font-size: 2.5rem;
    padding: 1rem;
    border-bottom: 8px solid var(--color-tertiary);
`;

const Form = styled.form`
    margin: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

const FormInput = styled.textarea`
    padding: 0.8rem;
    margin: 0.5rem;
    font-size: 1.3rem;
    width: 50vw;
`;

const SubmitBtn = styled.button`
    padding: 1.3rem;
    margin: 1rem;
    font-size: 1.2rem;
    background-color: var(--color-primary);
    color: var(--color-secondary);
    border: none;
    border-radius: 18px;
    box-shadow: 0 0 8px black;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        background-color: var(--color-tertiary);
        color: black;
    }
`;

const PostOpinion = () => {
    const [opinionFormState, setOpinionFormState] = useState({ opinionText: '' });
    const [addOpinion] = useMutation(ADD_OPINION);

    const handleChange = e => {
        setOpinionFormState({ ...opinionFormState, opinionText: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        
        try {
            const { data } = await addOpinion({ variables: opinionFormState });
            console.log(data);
            window.location.replace('/');
        } catch (e) {
            console.error(e);
        };
    };

    return (
        <PostOpinionContainer>
            <CardTitle>Post an Opinion</CardTitle>
            <Form onSubmit={handleSubmit}>
                <FormInput onChange={handleChange} type='text' name='opinionText' placeholder='Your opinion...' defaultValue={opinionFormState.opinionText} />
                <SubmitBtn>Submit</SubmitBtn>
            </Form>
        </PostOpinionContainer>
    );
};

export default PostOpinion;