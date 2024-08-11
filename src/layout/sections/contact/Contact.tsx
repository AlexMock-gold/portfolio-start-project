import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../componets/SectionTitle";
import {StyledButton} from "../../../componets/Button";

export const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle>Contact</SectionTitle>
            <StyledForm>
                <Field placeholder={"name"}/>
                <Field placeholder={"subject"}/>
                <Field placeholder={"message"} as={"textarea"}/>
                <StyledButton type={"submit"}>Send message</StyledButton>
            </StyledForm>

        </StyledContact>
    );
};

const StyledContact = styled.section`
    min-height: 50vh;
    background-color: #7e82cd;
`
const StyledForm = styled.form`
max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
`
const Field = styled.input`

`