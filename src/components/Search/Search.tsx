import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { InputWrapperS } from "./searchStyled";
import {
  EModalOptions,
  getFilteredChars,
  inputValueSelector,
  setFilterDataEmpty,
  setModalOptions,
  setModalToggler,
} from "../../redux/storage/rickAndMortyReducer";
import { ButtonS } from "./SearchButton/searchButtonStyled";
import { EInputType, Input } from "./Input/Input";

export const Search: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const inputValue = useAppSelector(inputValueSelector);

  React.useEffect(() => {
    const resetFilters = async () => {
      await dispatch(setFilterDataEmpty());
      await dispatch(
        getFilteredChars({
          name: inputValue,
          status: "",
          species: "",
          type: "",
          gender: "",
        })
      );
    };
    resetFilters();
  }, [inputValue]);

  return (
    <InputWrapperS>
      <Input inputValue={inputValue} inputType={EInputType.mainInput} />
      <ButtonS
        onClick={() => {
          dispatch(setModalOptions(EModalOptions.filtersGroup));
          dispatch(setModalToggler(true));
        }}
      >
        filters
      </ButtonS>
    </InputWrapperS>
  );
};

export default React.memo(Search);
