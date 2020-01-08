import {compose, createStore, applyMiddleware} from 'redux'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {reducers, IReduxState} from "./reducers";

import createSagaMiddleware from 'redux-saga'
import rootSaga from './middlewares/rootSaga';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const sagaMiddleware = createSagaMiddleware();
const reduxDevTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();

const middlewares = compose(
    applyMiddleware(sagaMiddleware),
    reduxDevTools
);

export const store = createStore<IReduxState, any, any, any>(reducers, middlewares);
// export const store = createStore<IReduxState, any, any, any>(persistedReducer, middlewares);

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
