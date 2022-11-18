import styled from "styled-components";
import { projectColors } from "../../constants/projectColors";

interface IPopupWrapperS {
    scale: string;
}
export const PopupWrapperS = styled.div<IPopupWrapperS>`
    height: 100vh;
    width: 100%;
    position: fixed;
    background-color: ${projectColors.popup.backgroundColor};
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${props => props.scale==="true" ? "1" : "0"};
    pointer-events: ${props => props.scale==="true" ? "all" : "none"};
    transition:  0.5s ;
`;
export const PopupContentS = styled.div`
    padding: 10px;
    border-radius: 15px;
    background-color: ${projectColors.popup.contentBgColor};
`;