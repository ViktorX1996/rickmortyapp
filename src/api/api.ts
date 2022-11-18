import  axios from 'axios';
import { ICharsResult, IAxiosDataGetAllChars } from '../redux/storage/IAxiosDataGetAllChars';

const BASE_URL = 'https://rickandmortyapi.com/api';

const rickMortyCharsMainUrl = new URL(`${BASE_URL}/character`);

const instance = axios.create({ 
})
export const rickAndMortyApi = {
    getAllChars: async (pageNumber?: number, name?: string) => {
        const response = await instance.get<IAxiosDataGetAllChars>(rickMortyCharsMainUrl.href + `?page=${pageNumber}&name=${name}`);
        return response.data
    },
    getCharById: async (id: number) => {
        const response = await instance.get<ICharsResult>(rickMortyCharsMainUrl.href + `/${id}`);
        return response.data
    },
    getFilteredChars: async (name?: string, status?: string, species?: string, type?: string, gender?: string, pageNumber?: number ) => {
        const response = await instance.get<IAxiosDataGetAllChars>(rickMortyCharsMainUrl.href + `?name=${name}&status=${status}&species=${species}&type=${type}&gender=${gender}&page=${pageNumber}`);
        return response.data
    },
    getNewPage: async (url: string) => {
        const response = await instance.get<IAxiosDataGetAllChars>(url);
        return response.data
    },
}