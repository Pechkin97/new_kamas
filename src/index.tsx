import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";

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
                <App state={state}
                     addPost={store.addPost.bind(store)}
                    updateNewPostText={store.updateNewPostText.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>
    )
}

renderTree(store.getState())

store.subscribe(renderTree)

reportWebVitals();
