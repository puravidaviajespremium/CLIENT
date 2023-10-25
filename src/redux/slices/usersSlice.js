import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],                                     
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: { 
        getUsers: (state, action) => {
            state.clients = action.payload;
        },

    },
});

export const { getUsers } = usersSlice.actions;    
export default usersSlice.reducer;