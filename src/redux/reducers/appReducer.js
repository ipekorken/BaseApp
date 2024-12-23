import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isShowSplash: false,
};

export const appReducer = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsShowSplash: (state, action) => {
      state.isShowSplash = action.payload;
    },
  },
});

export const {setIsShowSplash} = appReducer.actions;
export default appReducer.reducer;
