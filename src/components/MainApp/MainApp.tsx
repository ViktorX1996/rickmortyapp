import React from "react";
import { Card } from "../Card/Card";
import { CardContainerS, MainAppWrapperS } from "./mainAppStyled";
import { useAppSelector } from "../../hooks/hooks";
import {
  modalOptionsSelector,
  modalTogglerSelector,
  statusAllCharsSelector,
} from "../../redux/storage/rickAndMortyReducer";
import Search from "../Search/Search";
import { PopupWindow } from "../PopupWindow/PopupWindow";
import ErrorScreen from "../ErrorScreen/ErrorScreen";
import { ICharsResult } from "../../redux/storage/IAxiosDataGetAllChars";

type TProps = {
  currentItems: Array<ICharsResult>;
};
const MainApp: React.FunctionComponent<TProps> = ({ currentItems }) => {
  const modalToggle = useAppSelector(modalTogglerSelector);
  const modalOption = useAppSelector(modalOptionsSelector);
  const isError = useAppSelector(statusAllCharsSelector);
  return (
    <>
      <MainAppWrapperS>
        <Search />
        <PopupWindow active={modalToggle} childrenOption={modalOption} />
        <CardContainerS>
          {isError === "404" ? (
            <ErrorScreen />
          ) : (
            currentItems.map((item) => {
              return (
                <Card
                  key={item.id + item.name + item.species}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  gender={item.gender}
                  species={item.species}
                />
              );
            })
          )}
        </CardContainerS>
      </MainAppWrapperS>
    </>
  );
};
export default React.memo(MainApp);
