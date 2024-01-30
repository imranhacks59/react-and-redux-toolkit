import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import
//  AuthSlice,
  { userReducer } from './reducer/AuthSlice'
import { userAPI } from './api/UserApi';
const reducers = combineReducers({
  //  auth : AuthSlice,
   [userAPI.reducerPath]: userAPI.reducer,
   auth: userReducer,
  });

  const persistConfig = {
    key: 'root',
    storage,
  };
  
const persistedReducer = persistReducer(persistConfig, reducers);

const store  = configureStore({
    reducer: persistedReducer,
    // reducer: {
    //   auth: userAPI.reducer,
    //   [userReducer.name]: userReducer.reducer,
    // },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    //     serializableCheck: false,
    // }),
    middleware: (mid) => [
      ...mid({serializableCheck: false,}),
      userAPI.middleware,
      // productAPI.middleware,
      // orderApi.middleware,
      // dashboardApi.middleware,
    ],

    
})

const persistor = persistStore(store);
export {store, persistor};