import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartIsOpen: false,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        openCart: (state) => {
            state.cartIsOpen = true;
        },
        closeCart: (state) => {
            state.cartIsOpen = false;
        }
    }
})


export const { openCart, closeCart } = cartSlice.actions;

export default cartSlice.reducer;