import {
  checkListTitlesGender,
  checkListTitlesSpecies,
  checkListTitlesStatus,
} from "../../constants/checkListTitles";
import { useAppSelector } from "../../hooks/hooks";
import {
  ECheckBoxOptions,
  inputValueSelector,
} from "../../redux/storage/rickAndMortyReducer";
import { EInputType, Input } from "../Search/Input/Input";
import { SearchButton } from "../Search/SearchButton/SearchButton";
import { CheckboxR } from "./CheckboxR/CheckboxR";
import { FiltersGroupS } from "./filtersGroupStyled";

export enum EConfigMap {
  status = "status",
  gender = "gender",
  species = "species",
}
export const FiltersGroup: React.FunctionComponent = () => {
  const inputValue = useAppSelector(inputValueSelector);
  return (
    <FiltersGroupS>
      <Input inputValue={inputValue} inputType={EInputType.filterInput} />
      <CheckboxR
        checkListConfig={checkListTitlesStatus}
        title={ECheckBoxOptions.status}
        configMap={EConfigMap.status}
      />
      <CheckboxR
        checkListConfig={checkListTitlesGender}
        title={ECheckBoxOptions.gender}
        configMap={EConfigMap.gender}
      />
      <CheckboxR
        checkListConfig={checkListTitlesSpecies}
        title={ECheckBoxOptions.species}
        configMap={EConfigMap.species}
      />
      <SearchButton />
    </FiltersGroupS>
  );
};
