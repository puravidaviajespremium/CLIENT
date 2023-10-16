import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countries: [],                                     //  <--- Agregar más estados iniciales aquí!!!
    detail: [],
};

export const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers: {
        getCountries: (state, action) => {
            state.countries = action.payload;
        },                                             //  <--- Agregar más reducers aquí!!!

        getCountryId: (state, action) => {
            state.detail = action.payload;
        },

    },
});

export const { getCountries, getCountryId } = countriesSlice.actions;     //  <--- Agregar más actions aquí!!!
export default countriesSlice.reducer;

