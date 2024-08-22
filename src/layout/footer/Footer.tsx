import React from 'react';
import styled from "styled-components";
import {Icon} from "../../componets/icon/Icon";
import {FlexWrapper} from "../../componets/FlexWrapper";
import {theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper align={"center"} direction={"column"}>
            <Name>Svetlana</Name>
            <SocialList>
                <SocialItem><SocialLink href="#"><Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"}  iconId={"instagram"}/></SocialLink></SocialItem>
                <SocialItem><SocialLink href="#"><Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"}  iconId={"telegram"}/></SocialLink></SocialItem>
                <SocialItem><SocialLink href="#"><Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"}  iconId={"vKontakt"}/></SocialLink></SocialItem>
                <SocialItem><SocialLink href="#"><Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"}  iconId={"linkeDin"}/></SocialLink></SocialItem>
            </SocialList>
            <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};


const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBG};
    padding: 40px 0;
`

const Name = styled.h3`
    font-weight: 700;
    font-size: 22px;
    font-family: "Josefin Sans", sans-serif;
    letter-spacing: 3px;
`
const SocialList = styled.ul`
display: flex;
    gap: 20px;
    margin: 30px 0;
    
`
const SocialItem = styled.li`
    list-style-type: none;
    
`

const SocialLink = styled.a`
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    height: 35px;
    width: 35px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.accent};
    &:hover {
        color: ${theme.colors.primaryBG};
        transform: translateY(-4px);
    }
`

const Copyright = styled.small`
    font-weight: 400; 
    font-size: 12px;
    text-align: center;
    opacity: 0.5;
`
