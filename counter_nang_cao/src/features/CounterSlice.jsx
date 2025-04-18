import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const CounterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        reset: (state) => {
            state.value = 0;
        }
    }
})

export const { increment, incrementByAmount, reset } = CounterSlice.actions;
export default CounterSlice.reducer;
