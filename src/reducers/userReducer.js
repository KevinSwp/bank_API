import { createSlice } from "@reduxjs/toolkit";

// Creating a slice named "user" for the user related state and logic in the Redux store
const user = createSlice({
  // Name of the slice
  name: "user",

  // Initial state values for this slice
  initialState: {
    token: '',           // To store the authentication token
    username: '',        // To store the name of the authenticated user
  },

  // Reducers are functions that determine changes to the state. 
  // They will be auto-generated into action creators based on their function names.
  reducers: {
    // Saves the provided `token` and `username` to the state and 
    // sets the `isLoading` flag back to false
    saveToken: (state, action) => {
      state.token = action.payload.token;
      state.username = action.payload.username;

      try {
        localStorage.setItem('token', JSON.stringify({
          'token': action.payload.token,
          'username': action.payload.username
        }));
      } catch (e) {
        console.error('Could not save to local storage:', e);
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
        localStorage.removeItem('token'); // Supprime le token du localStorage
      } catch (e) {
        console.error('Could not remove from local storage:', e);
      }
    }
    
  }
});

// Exporting generated action creators to be used in components or middlewares
export const { saveToken, saveUserDetails, logoutUser } = user.actions;

// Exporting the generated reducer function as default to be used in the Redux store
export default user.reducer;
