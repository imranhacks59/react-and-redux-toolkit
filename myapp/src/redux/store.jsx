import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import AuthSlice from './reducer/AuthSlice'
const reducers = combineReducers({
   auth : AuthSlice
  });

  const persistConfig = {
    key: 'root',
    storage,
  };
  
const persistedReducer = persistReducer(persistConfig, reducers);

const store  = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),

    
})

const persistor = persistStore(store);
export {store, persistor};