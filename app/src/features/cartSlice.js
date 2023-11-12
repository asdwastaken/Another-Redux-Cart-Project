import { createSlice } from "@reduxjs/toolkit";
import glassesImage from '../content/static-images/glasses-image.png'
import beltImage from '../content/static-images/belt-image.png'

const initialState = {
    cartIsOpen: false,
    products: [
        {
            "id": 0,
            "title": "Gucci Leather belt",
            "price": "32",
            "selectedSize": "70cm",
            "selectedColor": ["black", "yellow"],
            "images": [glassesImage],
            "amount": 1,
        },
        {
            "id": 1,
            "title": "Fendi D-frame gold-tone sunglasses",
            "price": "26",
            "selectedSize": "Height: 6 cm / 2.3 in. Width: 15 cm / 5.9 in.",
            "selectedColor": ["black"],
            "images": [beltImage],
            "amount": 1,

        }
    ],
    total: 0,
    amount: 0,
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

            state.amount = amount;
            state.total = total;
        },
        increaseAmount: (state, action) => {
            const productId = action.payload;
            const product = state.products.find(x => x.id === productId);

            product.amount += 1;
            state.amount += 1;
        },
        decreaseAmount: (state, action) => {
            const productId = action.payload;
            const product = state.products.find(x => x.id === productId);

            if (product.amount == 1) {
                state.products = state.products.filter(x => x.id !== productId);
            }

            product.amount -= 1;
            state.amount -= 1;
        },
        removeItem: (state, action) => {
            const productId = action.payload;
            state.products = state.products.filter(x => x.id !== productId);
            state.amount -= 1;
        },
    }
})


export const { addToCart, closeCart, calculateTotal, increaseAmount, decreaseAmount, removeItem } = cartSlice.actions;

export default cartSlice.reducer;