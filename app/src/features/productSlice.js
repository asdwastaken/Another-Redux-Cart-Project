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
    "starRating": 0,
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        likeProduct: (state) => {
            state.liked = !state.liked;
        },
        calculateRating: (state) => {
            let ratings = 0;

            state.reviews.map(review => {
                ratings += Number(review.rating);
            });

            const averageRating = ratings / state.reviews.length;
            state.starRating = averageRating;
        },
        addReview: {
            reducer(state, action) {
                state.reviews.push(action.payload);
            },
            prepare({author, email, rating, message,}) {
                return {
                    payload: {
                        author,
                        email,
                        rating,
                        message,
                    }
                }
            }
        }
    },
    extraReducers: {
        [getProduct.pending]: (state) => {
            state.title = "";
            state.description = "";
            state.price = "";
            state.size = [];
            state.color = {};
            state.reviews = [];
            state.liked = false;
        },

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
});

export const { likeProduct, calculateRating, addReview} = productSlice.actions;

export default productSlice.reducer;