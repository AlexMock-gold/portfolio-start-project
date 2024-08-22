import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../componets/Link";
import {theme} from "../../../../styles/Theme";
import {Button} from "../../../../componets/Button";

type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImgWrapper>
                <Image src={props.src} alt=""/>
                <Button>view project</Button>
            </ImgWrapper>
            <Description>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Link href={"#"}>demo</Link>
                <Link href={"#"}>code</Link>
            </Description>

        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: ${theme.colors.secondaryBG};
    max-width: 540px;
    width: 100%;
    
    ${Link} {
        padding: 10px 0;
        & + ${Link}{
            margin-left: 20px;
        }
    }
`

const ImgWrapper = styled.div`
    position: relative;
    
    
&:hover {
    &::before {
        content: "";
        position: absolute;
        right: 0;
        left: 0;
        top: 0 ;
        bottom: 0;
        backdrop-filter: blur(4px);
        background: rgba(0, 0, 0, 0.3);
    }
        ${Button} {
            opacity: 1;
        }

}
    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        &::before {
            height: 100%;
            width: 100%;
        }
    }
`

const Image = styled.img`
width: 100%;
    height: 260px;
    object-fit: cover;
`
const Description = styled.div`
    margin: 25px 20px;
`

const Title = styled.h3`
        margin-top: 25px;
`
const Text = styled.p`
    margin: 14px 0 10px 0;
`

