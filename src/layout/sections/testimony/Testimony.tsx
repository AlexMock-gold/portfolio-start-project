import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../componets/SectionTitle";
import {Icon} from "../../../componets/icon/Icon";
import {Slider} from "../../../componets/slider/Slider";
import {FlexWrapper} from "../../../componets/FlexWrapper";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper align={"center"} direction={"column"}>
                <Icon iconId={"quote"}/>
                <Slider/>
            </FlexWrapper>

        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    min-height: 50vh;
    background-color: #e8d45a;
`