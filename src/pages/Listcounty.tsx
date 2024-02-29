import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {AppState} from "../store";
import { getProvince} from "../store/actions/provinceActions";
import {IProvince} from "../types/province";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";


function Listcounty() {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { data, loading, error,success } = useSelector(
        (state: AppState) => state.province
    );

    useEffect(() => {
      // @ts-ignore
        dispatch(getProvince())
    }, []);


    return (
        <div className="container">
            <div className="row">
                    <div className="offset-md-3 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                {data.length>0 && data?.map((pro:IProvince) => (
                                    <div className="col-md-12">
                                        {pro?.townDtoList?.map((item:any) => (
                                            <div className="text text-flex">
                                                <p className="text-flex">{pro.name} </p>
                                                <p className="text-flex">{item.name}</p>
                                                <p className="text-flex">{item.population}</p>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );

}

export default Listcounty;