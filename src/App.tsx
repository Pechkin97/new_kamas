import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App(props: any) {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar sidebar={props.state.sidebar}/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/' element={<div> Hello world! </div>}/>
                    <Route path='/dialogs/*' element={<Dialogs massages={props.state.massages}/>}/>
                    <Route path='/profile/*' element={<Profile
                        profile={props.state.profile}
                        dispatch={props.dispatch}
                    />}/>
                    <Route path='/News/*' element={<News/>}/>
                    <Route path='/Music/*' element={<Music/>}/>
                    <Route path='/Settings/*' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
