import React from "react";
import { useAppSelector } from "../../hooks/hooks";
import {
  singleCharDataSelector,
  statusSingleCharSelector,
} from "../../redux/storage/rickAndMortyReducer";
import {
  CharDescTitleS,
  CharDescContainerS,
  CharDescContentS,
  CharDescImageS,
  CharDescTextS,
  StatusTextDeadS,
  StatusTextAliveS,
} from "./charDescriptionStyled";

export const CharDescription: React.FunctionComponent = () => {
  const charData = useAppSelector(singleCharDataSelector);
  const status = useAppSelector(statusSingleCharSelector);
  return (
    <>
        {status === "loading" && (
            <CharDescContainerS>
                <CharDescTitleS>Loading...</CharDescTitleS>
            </CharDescContainerS>
        )}
      {status === "success" && (
        <>
          <CharDescTitleS>{charData?.name}</CharDescTitleS>
          <CharDescContainerS>
            <CharDescContentS>
              <CharDescImageS
                src={charData?.image}
                alt={`Should be ${charData?.name}'s illustrate`}
              />
              {charData?.status === "Alive" ? (
                <StatusTextAliveS>Alive</StatusTextAliveS>
              ) : (
                <StatusTextDeadS>Dead</StatusTextDeadS>
              )}
              <CharDescTextS>Gender: {charData?.gender}</CharDescTextS>
              <CharDescTextS>Status: {charData?.status}</CharDescTextS>
              <CharDescTextS>Species: {charData?.species}</CharDescTextS>
              <CharDescTextS>Origin: {charData?.origin.name}</CharDescTextS>
              <CharDescTextS>Location: {charData?.location.name}</CharDescTextS>
            </CharDescContentS>
          </CharDescContainerS>
        </>
      )}
    </>
  );
};
