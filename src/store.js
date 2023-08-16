import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
// import counterReducer from './reducers/counterReducer';

// create the store using the configureStore function. (c'est comme un magasin où on peut tout trouver)
const store = configureStore({
    // Define which reducers handle which slices on application state.
    // The `user` slice will be managed by `userReducer`.
    reducer: {
        user: userReducer,
        // counter: counterReducer,
    },
});

export default store;
