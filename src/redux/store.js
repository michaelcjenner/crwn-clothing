import { createStore, applyMiddleware } from 'redux'; 

import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import persistReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(persistReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default store; 





