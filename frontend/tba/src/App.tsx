import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import Navbar from "./components/Navbar/Navbar";
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App () {
    return<>
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/register" element={<RegistrationForm/>}/>
            </Routes>
        </BrowserRouter>
        </>

}