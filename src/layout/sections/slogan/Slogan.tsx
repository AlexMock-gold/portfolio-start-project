import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../componets/SectionTitle";
import {Button} from "../../../componets/Button";
import {Container} from "../../../componets/Container";
import {FlexWrapper} from "../../../componets/FlexWrapper";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper  align={"center"} direction={"column"}>
                    <SectionTitle>I Am Available For Freelance</SectionTitle>
                    <Button>Hire me</Button>
                </FlexWrapper>

            </Container>
        </StyledSlogan>
    );
};

export default Slogan;

const StyledSlogan = styled.section`
    min-height: 50vh;
    background-color: rgba(189, 175, 175, 0.58);
    
`