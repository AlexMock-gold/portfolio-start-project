import styled from "styled-components";

type FlexWrapperPropsType = {
   direction?: string,
    align?: string,
    justify?: string,
    wrap?: string

}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props=> props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
        align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
`