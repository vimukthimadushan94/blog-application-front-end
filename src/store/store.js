import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from '../features/categorySlice'
import authReducer from '../features/authSlice'

export const store = configureStore({
    reducer:{
        category: categoryReducer,
        auth: authReducer
    }
})