import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import './index.scss';
import App from './core/App';
import * as serviceWorker from './serviceWorker';
import {PersistGate} from "redux-persist/integration/react";

ReactDOM.render(
    <Provider store={store}>
        {/*<PersistGate loading={null} persistor={persistor}>*/}
            <App />
        {/*</PersistGate>*/}
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
