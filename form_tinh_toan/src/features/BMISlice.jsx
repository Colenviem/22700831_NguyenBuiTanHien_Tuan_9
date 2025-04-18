import { createSlice } from '@reduxjs/toolkit'

const BMIslice = createSlice({
    name: 'bmi',
    initialState: {
        weight: '',
        height: '',
        result: ''
    },
    reducers: {
        updateInput: (state, action) => {
            const { field, value } = action.payload;
            state[field] = value;
        },
        calculateResult: (state, action) => {
            const weight = parseFloat(state.weight);
            const height = parseFloat(state.height);

            if (!isNaN(weight) && !isNaN(height) && height > 0) {
                const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
                state.result = bmi;
            } else {
                state.result = 'Dữ liệu không hợp lệ';
            }
        }
    }
})

export const { updateInput, calculateResult } = BMIslice.actions;
export default BMIslice.reducer;
