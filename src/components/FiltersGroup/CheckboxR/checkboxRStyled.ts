import styled from "styled-components";
import { projectColors } from "../../../constants/projectColors";

export const FilterTitleS = styled.h2`
    margin: 0;
    word-wrap: break-word;
    font-weight: 300;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid ${projectColors.borderBottomColor};
`;
export const FilterContainerS = styled.div`
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: left;
    flex-direction: column;
    margin: 0 10px 0 10px;
    border-radius: 5px;
    margin-top: 10px;
`;
