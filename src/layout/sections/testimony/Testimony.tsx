import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../componets/SectionTitle";
import {Icon} from "../../../componets/icon/Icon";
import {Slider} from "../../../componets/slider/Slider";
import {FlexWrapper} from "../../../componets/FlexWrapper";
import {IconWrapper} from "../skills/Skill";
import {Container} from "../../../componets/Container";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper align={"center"} direction={"column"}>
                    <IconWrapper>
                        <Icon iconId={"quote"}/>
                    </IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>


        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    min-height: 50vh;
    background-color: #e8d45a;
    
    ${IconWrapper} {
        margin: 52px 0 72px;
    }
`