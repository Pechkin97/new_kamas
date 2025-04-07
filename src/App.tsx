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
import {addPost} from "./redux/state";

function App(props: any) {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar sidebar={props.appState.sidebar}/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/dialogs/*' element={<Dialogs massages={props.appState.massages}/>}/>
                    <Route path='/profile/*' element={<Profile profile={props.appState.profile} addPost={props.addPost}/>}/>
                    <Route path='/News/*' element={<News/>}/>
                    <Route path='/Music/*' element={<Music/>}/>
                    <Route path='/Settings/*' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
