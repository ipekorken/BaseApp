import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: null,
  userInfo: null,
};

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const {setToken, setUserInfo} = userReducer.actions;
export default userReducer.reducer;
