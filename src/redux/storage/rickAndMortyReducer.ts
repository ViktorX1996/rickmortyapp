import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { RootState } from "../..";
import { rickAndMortyApi } from "../../api/api";
import { ICharsResult, IAxiosDataGetAllChars } from "./IAxiosDataGetAllChars";
import { IFilteredChars } from "./IAxiosDataGetChar";

type TStatus = {
  statusAllChars: string;
  statusSingleChar: string;
};
export type TFilterData = {
  name: string;
  status: string | undefined;
  species: string | undefined;
  gender: string | undefined;
};
type TDefaultState = {
  filterData: TFilterData;
  inputValue: string;
  isSelected: boolean | string | undefined;
  status: TStatus;
  modalToggler: boolean;
  resultById: ICharsResult | null;
  modalOptions: EModalOptions | null;
} & IAxiosDataGetAllChars;

export enum EModalOptions {
  charDescription = "charDescription",
  filtersGroup = "filtersGroup",
}
export enum ECheckBoxOptions {
  name = "name",
  status = "status",
  species = "species",
  gender = "gender",
}
const defaultState: TDefaultState = {
  inputValue: "",
  isSelected: false,
  modalToggler: false,
  modalOptions: null,
  status: {
    statusAllChars: "",
    statusSingleChar: "",
  },
  filterData: {
    name: "",
    status: "",
    species: "",
    gender: "",
  },
  info: {
    count: 0,
    pages: 0,
    next: "",
    prev: "",
  },
  results: [],
  resultById: null,
};

export const getAllCharInfo = createAsyncThunk(
  "mainReducer/getAllCharInfo",

  async (pageAndName: { page: number; name: string }) => {
    const { page, name } = pageAndName;
    try {
      const response = (await rickAndMortyApi.getAllChars(
        page,
        name
      )) as IAxiosDataGetAllChars;
      // console.log(response, "getAllChars");
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getCharInfoById = createAsyncThunk(
  "mainReducer/getCharInfoById",
  async (id: number) => {
    try {
      const response = (await rickAndMortyApi.getCharById(id)) as ICharsResult;
      // console.log(response, "getCharInfoById");
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getNextPageData = createAsyncThunk(
  "mainReducer/getNextPageData",
  async (url: string) => {
    try {
      const response = (await rickAndMortyApi.getNewPage(
        url
      )) as IAxiosDataGetAllChars;
      return response;
    } catch (error) {}
  }
);
export const getFilteredChars = createAsyncThunk(
  "mainReducer/getFilteredChars",
  async (filterParams: Partial<IFilteredChars>, { rejectWithValue }) => {
    const { name, status, species, type, gender, pageNumber } = filterParams;
    try {
      const response = (await rickAndMortyApi.getFilteredChars(
        name,
        status,
        species,
        type,
        gender,
        pageNumber
      )) as IAxiosDataGetAllChars;
      return response;
    } catch (err) {
      const error = err as AxiosError;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.status);
    }
  }
);

const charInfoSlice = createSlice({
  name: "charInfoSlice",
  initialState: defaultState,
  reducers: {
    setInputValue(state, action: PayloadAction<string>) {
      state.inputValue = action.payload;
    },
    setModalToggler(state, action: PayloadAction<boolean>) {
      state.modalToggler = action.payload;
    },
    setModalOptions(state, action: PayloadAction<EModalOptions | null>) {
      state.modalOptions = action.payload;
    },
    setIsSelected(state, action: PayloadAction<boolean | string>) {
      state.isSelected = action.payload;
    },
    setFilterDataGender(state, action: PayloadAction<string>) {
      state.filterData.gender = action.payload;
    },
    setFilterDataStatus(state, action: PayloadAction<string>) {
      state.filterData.status = action.payload;
    },
    setFilterDataSpecies(state, action: PayloadAction<string>) {
      state.filterData.species = action.payload;
    },
    setFilterDataName(state, action: PayloadAction<string>) {
      state.filterData.name = action.payload;
    },
    setFilterDataEmpty(state) {
      state.filterData.gender = "";
      state.filterData.status = "";
      state.filterData.species = "";
      state.filterData.name = "";
    },
    setFilterParamsEmpty(state) {
      state.filterData.gender = "";
      state.filterData.status = "";
      state.filterData.species = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCharInfo.pending, (state) => {
      state.status.statusAllChars = "loading";
    });
    builder.addCase(getAllCharInfo.fulfilled, (state, { payload }) => {
      state.status.statusAllChars = "success";
      if (payload) {
        state.info = payload.info;
        state.results = payload.results;
      }
    });
    builder.addCase(getAllCharInfo.rejected, (state) => {
      state.status.statusAllChars = "error";
    });
    //---------------------single char-----------------------------
    builder.addCase(getCharInfoById.pending, (state) => {
      state.status.statusSingleChar = "loading";
    });
    builder.addCase(getCharInfoById.fulfilled, (state, { payload }) => {
      state.status.statusSingleChar = "success";
      if (payload) {
        state.resultById = payload;
      }
    });
    builder.addCase(getCharInfoById.rejected, (state) => {
      state.status.statusSingleChar = "error";
    });
    //---------------------filtered chars-----------------------------
    builder.addCase(getFilteredChars.pending, (state) => {
      state.status.statusAllChars = "loading";
    });
    builder.addCase(getFilteredChars.fulfilled, (state, { payload }) => {
      state.status.statusAllChars = "success";
      if (payload) {
        state.info = payload.info;
        state.results = payload.results;
      }
    });
    builder.addCase(getFilteredChars.rejected, (state) => {
      state.status.statusAllChars = "404";
    });
    //---------------------next page-----------------------------
    builder.addCase(getNextPageData.pending, (state) => {
      state.status.statusAllChars = "loading";
    });
    builder.addCase(getNextPageData.fulfilled, (state, { payload }) => {
      state.status.statusAllChars = "success";
      if (payload?.results) {
        state.info = payload.info;
        state.results = payload.results;
      }
    });
    builder.addCase(getNextPageData.rejected, (state) => {
      state.status.statusAllChars = "error";
    });
  },
});

export const globalStatusSelector = (state: RootState) =>
  state.mainReducer.status.statusAllChars;
export const allCharDataSelector = (state: RootState) =>
  state.mainReducer.results;
export const singleCharDataSelector = (state: RootState) =>
  state.mainReducer.resultById;
export const statusSingleCharSelector = (state: RootState) =>
  state.mainReducer.status.statusSingleChar;
export const inputValueSelector = (state: RootState) =>
  state.mainReducer.inputValue;
export const modalTogglerSelector = (state: RootState) =>
  state.mainReducer.modalToggler;
export const modalOptionsSelector = (state: RootState) =>
  state.mainReducer.modalOptions;
export const isSelectedSelector = (state: RootState) =>
  state.mainReducer.isSelected;
export const filterDataSelectorGender = (state: RootState) =>
  state.mainReducer.filterData.gender;
export const filterDataSelectorStatus = (state: RootState) =>
  state.mainReducer.filterData.status;
export const filterDataSelectorSpecies = (state: RootState) =>
  state.mainReducer.filterData.species;
export const filterDataSelectorName = (state: RootState) =>
  state.mainReducer.filterData.name;
export const countSelector = (state: RootState) => state.mainReducer.info.count;
export const countPagesSelector = (state: RootState) =>
  state.mainReducer.info.pages;
export const nextPageSelector = (state: RootState) =>
  state.mainReducer.info.next;
export const statusAllCharsSelector = (state: RootState) =>
  state.mainReducer.status.statusAllChars;
export const {
  setInputValue,
  setModalToggler,
  setModalOptions,
  setIsSelected,
  setFilterDataGender,
  setFilterDataStatus,
  setFilterDataSpecies,
  setFilterDataName,
  setFilterDataEmpty,
  setFilterParamsEmpty,
} = charInfoSlice.actions;

export default charInfoSlice.reducer;
