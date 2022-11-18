import React from "react";
import { getFilteredChars } from "../../redux/storage/rickAndMortyReducer";
import { ButtonS } from "../Search/SearchButton/searchButtonStyled";
import { useAppDispatch } from "./../../hooks/hooks";
import { ErrorScreenS } from "./errorScreenStyled";

const ErrorScreen: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const goBack = () => {
    dispatch(
      getFilteredChars({
        name: "",
        status: "",
        species: "",
        type: "",
        gender: "",
      })
    );
  };
  return (
    <ErrorScreenS>
      <h2>char was not found</h2>
      <ButtonS onClick={goBack}>go back</ButtonS>
    </ErrorScreenS>
  );
};

export default React.memo(ErrorScreen);
