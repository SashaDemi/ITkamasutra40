import store from "./redux/state";
import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
                 store={store} />
        </React.StrictMode>
    );
    reportWebVitals();
}
/*export default rerenderEntireTree*/

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);