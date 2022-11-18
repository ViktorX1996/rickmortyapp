import React, { useState } from "react";
import Mapper from "../../../helpers/Mapper";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import {
  ECheckBoxOptions,
  filterDataSelectorGender,
  filterDataSelectorSpecies,
  filterDataSelectorStatus,
  setFilterDataGender,
  setFilterDataSpecies,
  setFilterDataStatus,
} from "../../../redux/storage/rickAndMortyReducer";
import { EConfigMap } from "../FiltersGroup";
import { FilterContainerS, FilterTitleS } from "./checkboxRStyled";

type TProps = {
  checkListConfig: Array<string>;
  title: ECheckBoxOptions;
  configMap: string;
};
export const CheckboxR: React.FunctionComponent<TProps> = (props) => {
  const [checkList, setCheckList] = useState(props.checkListConfig);
  const dispatch = useAppDispatch();
  const selectorStatus = useAppSelector(filterDataSelectorStatus); //setFilterDataStatus
  const selectorGender = useAppSelector(filterDataSelectorGender); //setFilterDataGender
  const selectorSpecies = useAppSelector(filterDataSelectorSpecies); //setFilterDataSpecies
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      props.title === ECheckBoxOptions.status &&
        dispatch(setFilterDataStatus(e.target.name));
      props.title === ECheckBoxOptions.gender &&
        dispatch(setFilterDataGender(e.target.name));
      props.title === ECheckBoxOptions.species &&
        dispatch(setFilterDataSpecies(e.target.name));
    } else {
      dispatch(setFilterDataStatus(""));
      dispatch(setFilterDataGender(""));
      dispatch(setFilterDataSpecies(""));
    }
  };
  // При отжатии чекбокса, нужно сбросить данные в сторе
  const ifCheckedDisabled = () => {
    if (selectorStatus !== "" && props.title === ECheckBoxOptions.status) {
      dispatch(setFilterDataStatus(""));
    }
    if (selectorGender !== "" && props.title === ECheckBoxOptions.gender) {
      dispatch(setFilterDataGender(""));
    }
    if (selectorSpecies !== "" && props.title === ECheckBoxOptions.species) {
      dispatch(setFilterDataSpecies(""));
    }
  };
  // 3 Mappers для трёх разных зависимостей, один Map перемешивает данные/переменные. math.random временно
  return (
    <FilterContainerS>
      <FilterTitleS>{props.title}</FilterTitleS>
      {props.configMap === EConfigMap.status &&
        checkList.map((item) => (
          <Mapper
            ifCheckedDisabled={ifCheckedDisabled}
            key={Math.random()}
            item={item}
            selector={selectorStatus}
            onChange={onChange}
          />
        ))}
      {props.configMap === EConfigMap.gender &&
        checkList.map((item) => (
          <Mapper
            ifCheckedDisabled={ifCheckedDisabled}
            key={Math.random()}
            item={item}
            selector={selectorGender}
            onChange={onChange}
          />
        ))}
      {props.configMap === EConfigMap.species &&
        checkList.map((item) => (
          <Mapper
            ifCheckedDisabled={ifCheckedDisabled}
            key={Math.random()}
            item={item}
            selector={selectorSpecies}
            onChange={onChange}
          />
        ))}
    </FilterContainerS>
  );
};
