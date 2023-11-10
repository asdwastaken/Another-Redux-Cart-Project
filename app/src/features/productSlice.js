import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "../services/productService";

const initialState = {
    "title": "",
    "description": "",
    "price": "",
    "size": [],
    "color": {},
    "reviews": [],
    "liked": false,
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        likeProduct: (state) => {
            state.liked = !state.liked;
        }
    },
    extraReducers: {
        [getProduct.fulfilled]: (state, action) => {
            state.title = action.payload.title;
            state.description = action.payload.description;
            state.price = action.payload.price;
            state.size = action.payload.size;
            state.color = action.payload.color;
            state.reviews = action.payload.reviews;
            state.liked = action.payload.liked;
        }
    }
})

export const { likeProduct } = productSlice.actions;

export default productSlice.reducer;