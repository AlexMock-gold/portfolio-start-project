import React from 'react';
import {SectionTitle} from "../../../componets/SectionTitle";
import styled from "styled-components";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../componets/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "./../../../assets/img/photo-2_1.webp";
import timerImg from "./../../../assets/img/photo-3_1.webp";
import {Container} from "../../../componets/Container";

const worksItems = ["All", "Landing page", "React", "Spa"];

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItem={worksItems}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"}>
                    <Work src={socialImg} title={"Social Network"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                    <Work src={timerImg} title={"Timer"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit ut labore et dolore magna aliqua Ut enim"}/>

                </FlexWrapper>
            </Container>
    </StyledWorks>
    );
};

const StyledWorks = styled.section`

`

