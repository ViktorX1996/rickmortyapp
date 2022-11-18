import styled from "styled-components";
import { device, size } from "../../constants/media";
import { projectColors } from "../../constants/projectColors";

interface ICardWrapper {}

export const CardWrapperS = styled.div<ICardWrapper>`
  @media ${device.laptopL} {
    flex-basis: calc(100% / 5 - 20px); // standart
    /* flex-basis: calc(100% / 2 - 20px); // for small widgets */
    /* flex-basis: calc(100% / 5 - 20px); // for big widgets */
  }
  @media ${device.laptop} and (max-width: ${size.laptopL}) {
    flex-basis: calc(100% / 4 - 20px);
  }
  @media ${device.tablet} and (max-width: ${size.laptop}) {
    flex-basis: calc(100% / 3 - 20px);
  }
  @media ${device.tabletM} and (max-width: ${size.tablet}) {
    flex-basis: calc(100% / 2 - 20px);
  }
  @media (max-width: ${size.tabletM}) {
    flex-basis: calc(80%);
  }
  color: ${projectColors.card.textColor};
  box-sizing: border-box;
  border-radius: 10px;
  background-color: ${projectColors.card.backgroundColor};
  margin: 10px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;
export const CharImageS = styled.img`
  border-radius: 10px 10px 0 0;
  object-fit: cover;
  height: 20vh;
  width: 100%;
  display: block;
`;
export const CharNameS = styled.h2`
  color: ${projectColors.card.textColor};
  margin: 0;
  padding: 10px;
  word-wrap: break-word;
  font-weight: 300;
  font-size: 1.2rem;
`;
export const CharGenderAndEpisodeS = styled.div`
  color: ${projectColors.card.textColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: auto;
  flex-grow: 1;
  align-items: flex-end;
  & > span {
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0.5rem 0 0.5rem;
    padding: 0 0 5px 0;
  }
`;
export const CharButtonS = styled.button`
  box-shadow: inset 0px 1px 0px -50px #efdcfb;
  background: linear-gradient(
    to bottom,
    rgba(161, 205, 207, 1) 5%,
    #bc80ea 100%
  );
  background-color: rgba(161, 205, 207, 1);
  border-radius: 6px;
  border-top: 2px solid ${projectColors.borderBottomColor};
  border-bottom: transparent;
  border-left: transparent;
  border-right: transparent;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #9752cc;
  &:hover {
    background: linear-gradient(
      to bottom,
      rgba(161, 205, 207, 1) 5%,
      #dfbdfa 100%
    );
    background-color: #bc80ea;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;
