import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartIsOpen: false,
    products: [],
    total: 58,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartIsOpen = true;
            state.products.push(action.payload);
        },
        closeCart: (state) => {
            state.cartIsOpen = false;
        },
        calculateTotal: (state) => {
            let total = 0;

            state.products.forEach(x => {
                total += x.amount * Number(x.price);
            })

            state.total = total + 32 + 26;
        }
    }
})


export const { addToCart, closeCart, calculateTotal } = cartSlice.actions;

export default cartSlice.reducer;