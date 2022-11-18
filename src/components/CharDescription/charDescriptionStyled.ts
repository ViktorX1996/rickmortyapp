import styled from "styled-components";
import { projectColors } from "../../constants/projectColors";

export const CharDescTitleS = styled.h2`
    margin: 0;
    word-wrap: break-word;
    font-weight: 300;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid ${projectColors.borderBottomColor};
`;
export const CharDescContainerS = styled.div`
`;
export const CharDescContentS = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 10px 0 10px;
    & > span {
        margin: 10px 10px 0 10px;
    }
`;
export const CharDescImageS = styled.img`
    width: 100%;
    margin-top: 10px;
    border-radius: 10px;
    object-fit: cover;
    display: block;
`;
export const CharDescTextS = styled.span`
    color: ${projectColors.card.textColor};
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0.5rem 0 0.5rem;
`;
export const StatusTextDeadS = styled.span`
    color: red;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0.5rem 0 0.5rem;
`;
export const StatusTextAliveS = styled.span`
    color: green;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0.5rem 0 0.5rem;
`;