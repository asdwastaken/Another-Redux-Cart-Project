import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartIsOpen: false,
    products: [],
    total: 58,
    amount: 2,
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
            let amount = 0;

            state.products.forEach(x => {
                total += x.amount * Number(x.price);
                amount += x.amount;
            })

            state.amount = amount + 2;
            state.total = total + 32 + 26;
        },
        increaseAmount: (state, action) => {
            const productTitle = action.payload;
            const product = state.products.find(x => x.title === productTitle);

            product.amount += 1;
            state.amount += 1;
        },
        decreaseAmount: (state, action) => {
            const productTitle = action.payload;
            const product = state.products.find(x => x.title === productTitle);

            if (product.amount == 1) {
                state.products = state.products.filter(x => x.title !== productTitle);
            }

            product.amount -= 1;
            state.amount -= 1;
        },
        removeItem: (state, action) => {
            const productTitle = action.payload;
            state.products = state.products.filter(x => x.title !== productTitle);
            state.amount -= 1;
        },
    }
})


export const { addToCart, closeCart, calculateTotal, increaseAmount, decreaseAmount, removeItem } = cartSlice.actions;

export default cartSlice.reducer;