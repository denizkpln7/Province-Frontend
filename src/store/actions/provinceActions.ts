import {IPostReq} from "../../types/IPostReq";
import {ProvinceDispatch} from "../../types/province";
import {config} from "../../api/config";
import {toast} from "react-toastify";
import success = toast.success;


export const addProvince =
    (form: IPostReq,succes:any) => async (dispatch: ProvinceDispatch) => {
        // @ts-ignore
        dispatch({ type: "ADD_PROVINCE_START" });
        try {
            const response = await config.post("/province", form);
            // @ts-ignore
            dispatch({ type: "ADD_PROVINCE_SUCCESS", payload: response?.data });
            succes()
        } catch(error) {
            // @ts-ignore
            dispatch({ type: "ADD_PROVINCE_ERROR",payload: error?.response?.data?.errorMessage });
        }
};

export const getProvince =
    () => async (dispatch: ProvinceDispatch) => {
        // @ts-ignore
        dispatch({ type: "PROVINCE_START" });
        try {
            const response = await config.get("/province/findall");
            // @ts-ignore
            dispatch({ type: "PROVINCE_SUCCESS", payload: response.data});
        } catch(error) {
            // @ts-ignore
            dispatch({ type: "PROVINCE_ERROR",payload: error?.response?.data?.errorMessage });
        }
    };

