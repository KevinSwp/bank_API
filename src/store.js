// import the configureStore function from the redux toolkit
import { configureStore } from '@reduxjs/toolkit';

// import the counterReducer
import counterReducer from './reducers/counterReducer';
import userReducer from './reducers/userReducer';

// create the store using the configureStore function. (c'est comme un magasin où on peut tout trouver)
const store = configureStore({
    reducer: {
        counter : counterReducer,
        user : userReducer,
    },
});

export default store;
