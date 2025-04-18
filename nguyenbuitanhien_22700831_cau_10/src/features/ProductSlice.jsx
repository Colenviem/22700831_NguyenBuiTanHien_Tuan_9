import { createSlice } from '@reduxjs/toolkit'

const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        list: [],
    },
    reducers: {
        setProducts: (state, action) => {
            state.list = action.payload;
        },
    },
})

export const { setProducts } = ProductSlice.actions;
export default ProductSlice.reducer;
