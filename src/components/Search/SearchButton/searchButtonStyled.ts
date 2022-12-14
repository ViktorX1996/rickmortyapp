import styled from "styled-components";

export const ButtonS = styled.button`
  box-shadow: 0px 1px 0px 0px #f0f7fa;
  background: linear-gradient(to bottom, #33bdef 5%, #019ad2 100%);
  background-color: #33bdef;
  border-radius: 6px;
  border: 1px solid #057fd0;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  margin: 10px 10px 10px 10px;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  width: auto;
  height: 2rem;
  text-decoration: none;
  text-shadow: 0px -1px 0px #5b6178;
  &:hover {
    background: linear-gradient(to bottom, #019ad2 5%, #33bdef 100%);
    background-color: #019ad2;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;
