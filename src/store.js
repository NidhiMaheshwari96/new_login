import { configureStore } from '@reduxjs/toolkit'
import authSlice from './redux/authSlice'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'


const reducers = combineReducers({
  counter: authSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

 export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

// export default store;


