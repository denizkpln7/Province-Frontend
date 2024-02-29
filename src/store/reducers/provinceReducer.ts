import {IProvince, Province, ProvinceAction, ProvinceState} from "../../types/province";


const defaultState: ProvinceState = {
    data: {} as Province,
    loading: false,
    error: "",
    success:"",
};

const provinceReducer=(state:ProvinceState=defaultState,action:ProvinceAction)=>{
    switch (action.type) {
        case "ADD_PROVINCE_START":
            return { ...state, loading: true, error: "", success:""};
        case "ADD_PROVINCE_SUCCESS":
            return {...state, loading: false, success:action.payload};
        case "ADD_PROVINCE_ERROR":
            return { ...state, loading: false, error: action.payload, success:"" };

        case "PROVINCE_START":
            return { ...state, loading: true, error: "", success:""};
        case "PROVINCE_SUCCESS":
            return {...state, loading: false, data:action.payload};
        case "PROVINCE_ERROR":
            return { ...state, loading: false, error:"Listelemede bi sıkıntı oldu", success:"" };



        default:
            return state;
    }
}


export default  provinceReducer;