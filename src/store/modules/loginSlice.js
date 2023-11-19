import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLogin: false,
    username: ''
  },
  reducers: {
    login(state, action) {
      localStorage.setItem('token', action.payload.token);
      state.isLogin = true;
      state.username = action.payload.username;
    },
    logout(state) {
      state.isLogin = false;
      state.username = '';
      localStorage.removeItem('token');
    }
  }
})

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;