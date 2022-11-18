import styled from "styled-components";
import { projectColors } from "../../constants/projectColors";

export const MainAppWrapperS = styled.div`
  overflow: auto;
  /* height: 500px;
  width: 25%; */
  /* height: 350px;
    width: 100%; */
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const CardContainerS = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: ${projectColors.linearGradient};
  overflow: hidden;
`;
export const ContentAboveS = styled.div`
  background-color: whitesmoke;
`;
