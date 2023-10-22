import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reviews: [],
};

export const reviewsSlice = createSlice({
    name: "reviews",
    initialState,
    reducers: {
        getReviews: (state, action) => {
            state.reviews = action.payload.result.reviews;
        },
    },
});

export const { getReviews } = reviewsSlice.actions;
export default reviewsSlice.reducer;