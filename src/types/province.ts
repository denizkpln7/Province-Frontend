import {ThunkDispatch} from "redux-thunk";


export interface Error {
    errorMessage: string
    errorCode: string
}

export type Province = IProvince[]

export interface IProvince {
    id: number
    name: string
    townDtoList: ITownDtoList[]
}

export interface ITownDtoList {
    id: number
    name: string
}

export interface ProvinceState{
    data:Province;
    loading:boolean;
    error:string;
    success:string;
}


interface PROVINCE_START {
    type: "PROVINCE_START";
}

interface PROVINCE_SUCCESS {
    type: "PROVINCE_SUCCESS";
    payload: Province;
}

interface PROVINCE_ERROR {
    type: "PROVINCE_ERROR";
}

interface ADD_PROVINCE_START {
    type: "ADD_PROVINCE_START";

}

interface ADD_PROVINCE_SUCCESS {
    type: "ADD_PROVINCE_SUCCESS";
    payload:string
}

interface ADD_PROVINCE_ERROR {
    type: "ADD_PROVINCE_ERROR";
    payload:string
}






export type ProvinceAction =
    | PROVINCE_START
    | PROVINCE_SUCCESS
    | PROVINCE_ERROR
    | ADD_PROVINCE_START
    | ADD_PROVINCE_SUCCESS
    | ADD_PROVINCE_ERROR


export type ProvinceDispatch = ThunkDispatch<ProvinceState, void, ProvinceAction>;
