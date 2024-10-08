import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";

export const MobileMenu = (props: { menuItem: Array<string> }) => {
  return (
    <StyledMobileMenu>
      <BurgerMenu isOpen={true}>
        <span></span>
      </BurgerMenu>
      <MobileMenuPopup isOpen={true}>
        <ul>
          {props.menuItem.map((item, index) => {
            return (
              <ListItem key={index}>
                <Link href="#">
                  {item}
                  <Mask>
                    <span>{item}</span>
                  </Mask>
                  <Mask>
                    <span>{item}</span>
                  </Mask>
                </Link>
              </ListItem>
            );
          })}
        </ul>
      </MobileMenuPopup>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav`
    display: none;

  @media ${theme.media.tablet} {
    display: none;
  }
`;

const BurgerMenu = styled.button<{isOpen: boolean}>`
position: fixed;
top: -100px;
right: -50px;
height: 200px; 
width: 200px; 
z-index: 9999999;


 span {
display: block;
height: 2px;
width: 36px; 
background-color: ${theme.colors.font};
left: 40px;
bottom: 50px;
position: absolute;

${props => props.isOpen && css<{isOpen: boolean}>`
background-color: rgba(255, 255, 255, 0);
`}

&::before {
content: "";
display: block;
height: 2px;
width: 36px; 
background-color: ${theme.colors.font};
position: absolute;
transform: translateY(-10px);

${props => props.isOpen && css<{isOpen: boolean}>`
   transform: rotate(-45deg) translateY(0);
`}
}

&::after {
  content: "";
  display: block;
  height: 2px;
  width: 24px; 
  background-color: ${theme.colors.font};
  position: absolute; 
  transform: translateY(10px);

  ${props => props.isOpen && css<{isOpen: boolean}>`
  transform: rotate(45deg) translateY(0);
  width: 36px;
  `}
  }
 }  
`; 

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    background-color: rgba(31, 31, 32, 0.9);
    top:  0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 99999;
    display: none;  
 
${props => props.isOpen && css<{isOpen: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
`}

ul {
    display: flex;
    gap: 30px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`;


const Link = styled.a`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  color: transparent;
`;
const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  color: ${theme.colors.accent};
  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`;
const ListItem = styled.li`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    height: 3px;
    background-color: ${theme.colors.accent};

    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;

    transform: scale(0);
  }

  &:hover {
    &::before {
      transform: scale(1);
    }
    ${Mask} {
      transform: skewX(12deg) translateX(5px);
      color: ${theme.colors.font};

      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
    }
  }
`;
