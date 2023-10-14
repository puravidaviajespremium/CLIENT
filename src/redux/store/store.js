import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "../slices/countriesSlice";


const store = configureStore({
    reducer: {
        countries: countriesReducer,         //  <--- Agregar más reducers aquí!!!
    },
});

export default store;

