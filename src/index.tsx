import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addPost} from "./redux/state";
import {renderApp} from "./render";

renderApp(state, addPost)

reportWebVitals();
