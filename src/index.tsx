import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addPost, updateNewPostText} from "./redux/state";
import {renderApp} from "./render";

renderApp(state, addPost, updateNewPostText)

reportWebVitals();
