import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';

// create the store using the configureStore function. (c'est comme un magasin où on peut tout trouver)
const store = configureStore({
    // Define which reducers handle which slices on application state.
    // The `user` slice will be managed by `userReducer`.
    reducer: {
        user: userReducer
    },
});

export default store;
