import React from 'react';
import styled from "styled-components";
import {Logo} from "../../componets/logo/Logo";
import {Menu} from "../../componets/menu/Menu";

const items = ["Home", "Skills", "Works", "Testimony", "Contact"];

export const Header = () => {
    return (
        <StyledHeader>
           <Logo/>
            <Menu menuItem={items}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: #bdd8a0;
`

