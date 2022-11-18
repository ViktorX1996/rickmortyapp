import React from "react";
import { useAppDispatch } from "../../hooks/hooks";
import {
  EModalOptions,
  setModalToggler,
} from "../../redux/storage/rickAndMortyReducer";
import { CharDescription } from "../CharDescription/CharDescription";
import { FiltersGroup } from "../FiltersGroup/FiltersGroup";
import { PopupWrapperS, PopupContentS } from "./popupWindowStyled";

type TProps = {
  children?: React.ReactNode;
  active: boolean;
  childrenOption: EModalOptions | null;
};
export const PopupWindow: React.FunctionComponent<TProps> = (props) => {
  const dispatch = useAppDispatch();
  const memoizedChildren = React.useMemo(() => {
    switch (props.childrenOption) {
      case EModalOptions.charDescription:
        return <CharDescription />;
      case EModalOptions.filtersGroup:
        return <FiltersGroup />;
      default:
        return <p>Nothing to show</p>;
    }
  }, [props.childrenOption]);
  return (
    <PopupWrapperS
      onClick={() => {
        dispatch(setModalToggler(false));
      }}
      scale={props.active.toString()}
    >
      <PopupContentS
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        {memoizedChildren}
      </PopupContentS>
    </PopupWrapperS>
  );
};
