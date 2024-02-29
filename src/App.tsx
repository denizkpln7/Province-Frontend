import React from 'react';
import { Route, Routes } from "react-router-dom"
import Navbar from './Navbar';
import Home from './pages/Home';
import Addcountry from './pages/Addcountry';
import { ToastContainer, toast } from 'react-toastify';
import Listcounty from "./pages/Listcounty";

function App() {

  return (
    <div className='main-back'>
        <ToastContainer />
      <Navbar />
      <div className='routes-field'>
        <Routes>
             <Route path="/" element={<Home />} />
            <Route path="/addcounty" element={<Addcountry />} />
            <Route path="/list" element={<Listcounty />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
