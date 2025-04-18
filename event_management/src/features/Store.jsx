import { configureStore } from '@reduxjs/toolkit'
import eventsReducer from './EventSlice'

const Store = configureStore({
    reducer: {
        events: eventsReducer,
    },
})

export default Store
