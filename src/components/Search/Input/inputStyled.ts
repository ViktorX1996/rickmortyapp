import styled from "styled-components";
import { projectColors } from "../../../constants/projectColors";

export const SearchFieldInputS = styled.div`
  width: 70%;
`;
export const InputS = styled.input`
  outline: none;
  border: none;
  background-color: ${projectColors.input.backgroundColor};
  color: blue;
  border: none;
  border-radius: 10px;
  padding: 5px;
  height: 30px;
  width: 100%;
  padding-left: 35px;
  ::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration {
    display: none;
  }
`;
