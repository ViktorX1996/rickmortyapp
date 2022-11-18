import React from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { EModalOptions, getCharInfoById, setModalOptions, setModalToggler } from "../../redux/storage/rickAndMortyReducer";
import {
  CardWrapperS,
  CharImageS,
  CharNameS,
  CharGenderAndEpisodeS,
  CharButtonS,

} from "./cardStyled";

type TProps = {
  id: number;
  image: string;
  name: string;
  gender: string;
  species: string;
};

export const Card: React.FunctionComponent<TProps> = (props) => {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();
  const onLoad = () => {
    setLoaded(() => true);
  };
  
  return (
    <>
    <CardWrapperS
      style={{
        display: loaded ? "flex" : "none"
      }}
    >
      <CharImageS src={props.image} alt="image" onLoad={onLoad} />
      <CharNameS
      >{props.name}</CharNameS>
      <CharGenderAndEpisodeS>
          <span>{props.gender}</span>
        <span>{props.species}</span>
      </CharGenderAndEpisodeS>
      <CharButtonS onClick={() => 
        {
            dispatch(setModalToggler(true))
            dispatch(getCharInfoById(props.id))
            dispatch(setModalOptions(EModalOptions.charDescription));
        }}>Open Info</CharButtonS>
    </CardWrapperS>
    </>
  );
};
