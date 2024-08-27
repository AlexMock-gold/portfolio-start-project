import { theme } from "./Theme"

type FontPropsType ={
      family?:string,
      color?:string,
      weight?:number,
      lineHeight?: number,
      Fmin?: number,
      Fmax?: number,
}

export const font = ({family, color, weight, lineHeight, Fmax, Fmin}: FontPropsType) =>`
font-family: ${family || "Poppins"};
color: ${color || theme.colors.font};
font-weight: ${weight || 400};
line-height: ${lineHeight || 1.2};
font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
` 

