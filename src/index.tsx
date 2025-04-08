import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addPost, subscribe, updateNewPostText} from "./redux/state";

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

let root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

let renderTree = (state:any) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App appState={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
            </BrowserRouter>
        </React.StrictMode>
    )
}

renderTree(state)

subscribe(renderTree)

reportWebVitals();
