import { createSlice } from "@reduxjs/toolkit";

export const quotesSlice = createSlice({
    name: "quotes",
    initialState: {
        quote: "\"Education: the path from cocky ignorance to miserable uncertainty.\"",
        author: "Mark Twain"
    },
    reducers: {
        newQuote: (state, action) => {
            state.quote = action.payload.quote;
            state.author = action.payload.author
        }
    }
});

export default quotesSlice.reducer;

export const { newQuote } = quotesSlice.actions;