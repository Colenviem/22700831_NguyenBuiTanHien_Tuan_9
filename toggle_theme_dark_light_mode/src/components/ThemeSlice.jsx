import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const ThemeSlice = createSlice({
    name: 'theme',
    initialState: 'light',
    reducers: {
        toggleTheme: (state) => {
            return state === 'light' ? 'dark' : 'light'
        }
    },
})

export const { toggleTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;