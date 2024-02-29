import React from 'react'

import axios from 'axios';
import { SlArrowRight } from "react-icons/sl";
import { useNavigate } from "react-router-dom";




function Home() {

    const navigate = useNavigate();

    function getList(): void {
        axios.get('http://localhost:8889/category/1')
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
    
            <div className='home-back'>
                <p className='home-text'>
                    Merhaba DenizDev hoşgeldiniz.
                </p>
                <p
                    className="home-link"
                    onClick={() => navigate("/addcounty")}
                >
                    <SlArrowRight />
                    İl iklemek için lütfen ekleme sayfasına geçiniz.
                </p>
            </div>
    
    )
}

export default Home