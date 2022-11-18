import React from "react";
import { ButtonS } from "./searchButtonStyled";
import { useAppDispatch, useAppSelector } from "./../../../hooks/hooks";
import {
  filterDataSelectorGender,
  filterDataSelectorName,
  filterDataSelectorSpecies,
  filterDataSelectorStatus,
  getFilteredChars,
  setModalToggler,
} from "../../../redux/storage/rickAndMortyReducer";

export const SearchButton: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(filterDataSelectorStatus);
  const species = useAppSelector(filterDataSelectorSpecies);
  const gender = useAppSelector(filterDataSelectorGender);
  const name = useAppSelector(filterDataSelectorName);
  return (
    <ButtonS
      onClick={() => {
        dispatch(
          getFilteredChars({
            name: name,
            status: status,
            species: species,
            type: "",
            gender: gender,
          })
        );
        dispatch(setModalToggler(false));
      }}
    >
      Search!
    </ButtonS>
  );
};
