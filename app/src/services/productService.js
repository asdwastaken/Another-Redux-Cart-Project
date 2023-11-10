import { createAsyncThunk } from "@reduxjs/toolkit";

const url = './products.json';


export const getProduct = createAsyncThunk('product/getProduct', (id) => {
    return fetch(url)
        .then(res => res.json())
        .then(result => {
            return result.find(x => x.id === id)
        })
        .catch(err => console.log(`Error: ${err}`));
})