import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    clients: [],                                     
};

export const clientsSlice = createSlice({
    name: "clients",
    initialState,
    reducers: {
        postClient: (state, action) => {
            state.clients = action.payload;
        }, 
        getClients: (state, action) => {
            state.clients = action.payload;
        },

    },
});

export const { postClient, getClients } = clientsSlice.actions;    
export default clientsSlice.reducer;