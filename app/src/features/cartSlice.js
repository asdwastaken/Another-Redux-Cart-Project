import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartIsOpen: false,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCart: (state) => {
            state.cartIsOpen = !state.cartIsOpen;
        },
      
    }
})


export const { toggleCart } = cartSlice.actions;

export default cartSlice.reducer;