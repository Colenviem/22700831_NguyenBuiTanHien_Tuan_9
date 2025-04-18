import React from 'react'
import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../components/CounterSlice'

const Store = configureStore({
    reducer: {
      counter: counterReducer,
    },
});

export default Store
