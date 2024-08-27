import React from 'react';
import photo from '../../../assets/img/photo-1.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../componets/FlexWrapper";
import {Container} from "../../../componets/Container";
import {theme} from "../../../styles/Theme";
import { font } from '../../../styles/Common';

export const Main = () => {
    return (
        <StyledMain>
            <Container>
            <FlexWrapper align={"center"} justify={"space-between"} wrap='wrap'>
                <div>
                    <SmallText>Hi There</SmallText>
                    <Name>I am <span>Svetlana Dyablo</span></Name>
                    <MainTitle>A Web Developer.</MainTitle>
                </div>
                <PhotoWrapper>
                    <StyledImg src={photo} alt=""/>
                </PhotoWrapper>

            </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #c59797;
    display: flex;
    
`
const StyledImg = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;

        @media ${theme.media.mobile}{
            width: 310px;
            height: 380px;
        }
`
const MainTitle = styled.h1`
    font-size: 27px;
    font-weight: 400;
`
const Name = styled.h2`
${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 50, Fmin: 36,})}
    
    letter-spacing: 0.05em;
    margin: 10px 0;
  
    
    span {   
        position: relative;
        z-index: 0;
        
        &::before {
        position: absolute;
        content: "";
        display: inline-block;
        width: 100%;
        height: 20px;
        background-color: ${theme.colors.accent};
        bottom: 0;
        z-index: -1;
    }}
 
`

const SmallText = styled.h2`
font-weight: 400;
    font-size: 14px;
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    
    &::before {
        content: "";
        position: absolute;
        width: 384px;
        height: 470px; 
        border: 5px solid ${theme.colors.accent};
        
        top: -24px;
        left: 24px;
        z-index: -1;

        @media ${theme.media.mobile}{
            width: 314px;
            height: 414px;
        }
    }
`