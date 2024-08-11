import React from 'react';
import styled from "styled-components";
import {Icon} from "../../componets/icon/Icon";
import {FlexWrapper} from "../../componets/FlexWrapper";

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
    background-color: #eadd55;
    min-height: 20vh;
`

const Name = styled.h3`

`
const SocialList = styled.ul`
display: flex;
    gap: 30px;
    
    
`
const SocialItem = styled.li`
    list-style-type: none;
`

const SocialLink = styled.a`
    
`

const Copyright = styled.small`

`
