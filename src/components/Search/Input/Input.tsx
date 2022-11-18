import React from "react";
import { useDebouncedCallback } from "use-debounce";
import { useAppDispatch } from "../../../hooks/hooks";
import {
  setFilterDataName,
  setInputValue,
} from "../../../redux/storage/rickAndMortyReducer";
import { InputS, SearchFieldInputS } from "./inputStyled";

export enum EInputType {
  mainInput = "mainInput",
  filterInput = "filterInput",
}
type TProps = {
  inputValue: string;
  inputType: EInputType;
};
export const Input: React.FunctionComponent<TProps> = (props) => {
  const dispatch = useAppDispatch();
  const debounced = useDebouncedCallback((value) => {
    if (props.inputType === EInputType.mainInput) {
      dispatch(setInputValue(value));
    } else {
      dispatch(setFilterDataName(value));
      dispatch(setInputValue(value));
    }
  }, 30);
  React.useEffect(() => {
    dispatch(setFilterDataName(props.inputValue));
  }, [props.inputValue]);
  return (
    <SearchFieldInputS>
      <InputS
        placeholder="Search"
        value={props.inputValue}
        onChange={(e) => debounced(e.target.value)}
        type="search"
        name="search"
      />
    </SearchFieldInputS>
  );
};
