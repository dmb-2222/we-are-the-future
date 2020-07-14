import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { taskReducer } from "./task/taskReducer";
import {itemsReducer} from './items/itemsReducer'

import ReduxThunk from "redux-thunk";

const middleware = [ReduxThunk];

// const persistConfig = {
//   key: 'login',
//   storage,
//   whitelist: ['isAuth'],
// };

const rootReducer = combineReducers({
  items: itemsReducer,
});
// const persisterReducer = persistReducer( rootReducer);

const enhancer = composeWithDevTools(applyMiddleware(...middleware));

export const store = createStore(rootReducer, enhancer);

// export const persistor = persistStore(store);
