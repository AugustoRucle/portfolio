import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from './components/Navbar/slice';

export default configureStore({
    reducer: {
        navbar: navbarReducer
    },
})