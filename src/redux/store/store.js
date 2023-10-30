import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "../slices/countriesSlice";
import clientsReducer from '../slices/clientsSlices';
import reviewsReducer from '../slices/reviewsSlice';           //  <--- Agregar los import de reducers aquí!!!
import usersReducer from '../slices/usersSlice';

const store = configureStore({
    reducer: {
        countries: countriesReducer,
        clients: clientsReducer,
        reviews: reviewsReducer,                              //  <--- Agregar más reducers aquí!!!
        users: usersReducer,
    },
});

export default store;

