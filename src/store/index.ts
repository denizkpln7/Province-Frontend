import { combineReducers } from "redux";
import provinceReducer from "./reducers/provinceReducer";
import {ProvinceState} from "../types/province";


export interface AppState {
  province:any
}


const rootReducer = combineReducers<AppState>({
   province:provinceReducer,
});

export default rootReducer;