import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "../slices/countriesSlice";
import clientsReducer from '../slices/clientsSlices';


const store = configureStore({
    reducer: {
        countries: countriesReducer,
        clients: clientsReducer        //  <--- Agregar más reducers aquí!!!
    },
});

export default store;

