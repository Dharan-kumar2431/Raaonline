import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  isLoggedIn: false,
};

export const loginStatusSlice = createSlice({
  name: 'loginStatus',
  initialState,
  reducers: {
    setLoggedInStatus: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setLoggedInStatus } = loginStatusSlice.actions;

export default loginStatusSlice.reducer;
