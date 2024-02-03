import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import loginReducer from './loginStatusSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    loginStatus: loginReducer,
  },
});

export default store;