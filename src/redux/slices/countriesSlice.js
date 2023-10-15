import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countries: [],                                     //  <--- Agregar más estados iniciales aquí!!!
};

export const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers: {
        getCountries: (state, action) => {
            state.countries = action.payload;
        },                                             //  <--- Agregar más reducers aquí!!!
    },
});

export const { getCountries } = countriesSlice.actions;     //  <--- Agregar más actions aquí!!!
export default countriesSlice.reducer;

