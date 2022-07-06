import React from "react";
import MainHeader from "./MainHeader/MainHeader";
import './Main.css'
import Dialogs from "../Dialogs/Dialogs";
import Home from "../Home/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Posts from "./Posts/Posts";

function MainJ ( ) {
    return (

        <div className="main_wrapper">
        <MainHeader/>
            <BrowserRouter>
                <Routes>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/messages' element={<Dialogs/>}/>
                    <Route path='/post1' element={<Dialogs/>}/>
                </Routes>
            </BrowserRouter>


        </div>

    )
}
export default MainJ;