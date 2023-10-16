import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countries: [],                                     //  <--- Agregar más estados iniciales aquí!!!
    searchResult: []
};

export const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers: {
        getCountries: (state, action) => {
            state.countries = action.payload;
        },                                             //  <--- Agregar más reducers aquí!!!
        searchCountries: (state, action) => {
            state.searchResult = action.payload;
        },
    },
});

export const { getCountries, searchCountries } = countriesSlice.actions;     //  <--- Agregar más actions aquí!!!
export default countriesSlice.reducer;