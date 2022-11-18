import React from "react";
import { useEffect } from "react";
import "./App.css";
import Pagination from "./components/Pagination/Pagination";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import {
  allCharDataSelector,
  getAllCharInfo,
} from "./redux/storage/rickAndMortyReducer";

const App: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(allCharDataSelector);
  useEffect(() => {
    dispatch(getAllCharInfo({ page: 1, name: "" }));
  }, []);
  return <Pagination itemsPerPage={15} data={data} />;
};

export default App;
