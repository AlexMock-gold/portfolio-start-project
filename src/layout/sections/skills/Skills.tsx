import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../componets/FlexWrapper";
import {SectionTitle} from "../../../componets/SectionTitle";
import {Skill} from "./Skill";
import {eventWrapper} from "@testing-library/user-event/dist/utils";


export const Skills = () => {
    return (
        <StyledSkills>
     <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Skill iconId={"codeSvg"}
                       title={"html5"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, perspiciatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, perspiciatis"}/>
                <Skill iconId={"css"}
                    title={"css"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, perspiciatis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, perspiciatis"}/>
                <Skill iconId={"react"}
                       title={"react"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, perspiciatis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, perspiciatis"}/>
                <Skill iconId={"typeScript"}
                       title={"typeScript"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, perspiciatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, perspiciatis"}/>
                <Skill iconId={"styledComponents"}
                       title={"Styled Components"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, perspiciatis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, perspiciatis"}/>
                <Skill iconId={"webDesign"}
                       title={"Web Design"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, perspiciatis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, perspiciatis"}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    min-height: 100vh;
    background-color: #c7e1b4;
`