import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
    products: []
};

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload];
        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((cartItem) => cartItem.id !== action.payload);
        },
        setProducts: (state, action) => {
            state.products = action.payload;
        }
    },
});


// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, setProducts } = globalSlice.actions;

export default globalSlice.reducer;