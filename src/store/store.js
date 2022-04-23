import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";

import rootReducer from '../reducers/rootReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const persistConfig = {
    // Root
    key: 'root',
    storage: storage,
    // Whitelist (Save Specific Reducers)
    whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);
const persistor = persistStore(store)

export { store, persistor }
