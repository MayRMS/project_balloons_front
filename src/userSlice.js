import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userPass: {
    token: '',
    user: {},
    type: ''
  }}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      login: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      },
      logout: () => {
        return initialState
      }
      
    }
    
});

export const { login, logout } = userSlice.actions;

export const userData = (state) => state.user;

export default userSlice.reducer;