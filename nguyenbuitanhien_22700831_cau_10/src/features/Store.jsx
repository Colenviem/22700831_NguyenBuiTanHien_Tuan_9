import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './CartSlice'
import authReducer from './AuthSlice'
import productReducer from './ProductSlice'

const Store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
        product: productReducer,
    },
})

export default Store
