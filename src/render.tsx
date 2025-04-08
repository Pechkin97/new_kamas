import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

export function renderApp(state: any, addPost: any) {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App appState={state} addPost={addPost}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}
