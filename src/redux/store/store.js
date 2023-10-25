import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "../slices/countriesSlice";
import clientsReducer from '../slices/clientsSlices';
import reviewsReducer from '../slices/reviewsSlice';           //  <--- Agregar los import de reducers aquí!!!

const store = configureStore({
    reducer: {
        countries: countriesReducer,
        clients: clientsReducer,
        reviews: reviewsReducer,                              //  <--- Agregar más reducers aquí!!!
    },
});

export default store;

