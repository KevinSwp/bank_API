import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: {
    token : '',
    username : '',
  },
  reducers: {
    saveToken: (state, action) => {
        state.token = action.payload.token
        state.username = action.payload.username
    },
  },
}); 

export const { saveToken } = user.actions;

export default user.reducer;