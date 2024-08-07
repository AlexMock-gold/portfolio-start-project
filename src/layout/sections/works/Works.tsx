import React from 'react';
import {SectionTitle} from "../../../componets/SectionTitle";
import styled from "styled-components";
import {Menu} from "../../../componets/menu/Menu";
import {FlexWrapper} from "../../../componets/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "./../../../assets/img/photo-2_1.webp";
import timerImg from "./../../../assets/img/photo-3_1.webp";

const worksItems = ["All", "Landing page", "React", "Spa"];

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItem={worksItems}/>
            <FlexWrapper justify={"space-around"}>
                <Work src={socialImg} title={"Social Network"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                <Work src={timerImg} title={"Timer"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit ut labore et dolore magna aliqua Ut enim"}/>
            </FlexWrapper>
    </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #d88e8e;
`

