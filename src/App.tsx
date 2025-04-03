import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/dialogs/*' element={<Dialogs/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
