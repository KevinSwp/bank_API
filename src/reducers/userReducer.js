import { createSlice } from "@reduxjs/toolkit";

// Creating a slice named "user" for the user related state and logic in the Redux store
const user = createSlice({
  // Name of the slice
  name: "user",

  // Initial state values for this slice
  initialState: {
    token: '',           // Store the authentication token
    username: '',        // Store the name of the authenticated user
  },

  reducers: {
    // Saves the provided `token` and `username` to the state
    saveToken: (state, action) => {
      state.token = action.payload.token;
      state.username = action.payload.username;

      try {
        localStorage.setItem('token', JSON.stringify({
          'token': action.payload.token,
          'username': action.payload.username
        }));
      } catch (e) {
        console.error('Error cannot save token in local storage', e);
      }
    },

    saveUserDetails: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },

    logoutUser: (state) => {
      state.token = '';
      state.username = '';
      state.firstName = '';
      state.lastName = '';
      try {
        localStorage.removeItem('token'); // Delete token from local storage
      } catch (e) {
        console.error('Error cannot remove token from local storage', e);
      }
    }
    
  }
});

// Exporting actions
export const { saveToken, saveUserDetails, logoutUser } = user.actions;

// Exporting the generated reducer function as default to be used in the Redux store
export default user.reducer;
