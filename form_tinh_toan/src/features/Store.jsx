import { configureStore } from '@reduxjs/toolkit'
import bmiReducer from './BMIslice'

const Store = configureStore({
    reducer: {
        bmi: bmiReducer 
    }
})

export default Store
