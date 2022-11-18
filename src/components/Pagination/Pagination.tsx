import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { ICharsResult } from "../../redux/storage/IAxiosDataGetAllChars";
import {
  countPagesSelector,
  filterDataSelectorGender,
  filterDataSelectorSpecies,
  filterDataSelectorStatus,
  getFilteredChars,
  inputValueSelector,
} from "../../redux/storage/rickAndMortyReducer";
import MainApp from "../MainApp/MainApp";
import { StyledPaginateContainer } from "./paginationStyled";

type TProps = {
  itemsPerPage: number;
  data: Array<ICharsResult>;
};
export const Pagination: React.FunctionComponent<TProps> = ({
  itemsPerPage,
  data,
}) => {
  const dispatch = useAppDispatch();
  const [currentItems, setCurrentItems] = useState<Array<ICharsResult>>([]);
  const [itemOffset, setItemOffset] = useState<number>(0);
  const [countPages, setCountPages] = useState<number>(1);
  const count = useAppSelector(countPagesSelector);
  const inputValue = useAppSelector(inputValueSelector);
  const status = useAppSelector(filterDataSelectorStatus);
  const species = useAppSelector(filterDataSelectorSpecies);
  const gender = useAppSelector(filterDataSelectorGender);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setCountPages(count);
  }, [itemOffset, itemsPerPage, data]);

  return (
    <>
      <MainApp currentItems={currentItems} />
      <StyledPaginateContainer>
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          previousClassName={"previous"}
          nextClassName={"next"}
          disabledClassName={"disabled"}
          onPageChange={(data) => {
            dispatch(
              getFilteredChars({
                name: inputValue,
                status: status,
                species: species,
                type: "",
                gender: gender,
                pageNumber: data.selected + 1,
              })
            );
          }}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          pageCount={count}
          pageLinkClassName={"pageLink"}
          breakLabel="..."
          breakClassName={"pageItem"}
          breakLinkClassName={"pageLink"}
          containerClassName={"pagination"}
          activeClassName={"active"}
          forcePage={count !== 0 ? 0 : count - 1}
        />
      </StyledPaginateContainer>
    </>
  );
};

export default Pagination;
