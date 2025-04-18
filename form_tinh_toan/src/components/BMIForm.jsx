import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateInput, calculateResult } from '../features/BMIslice'

const BMIForm = () => {
    const dispatch = useDispatch();
    const { weight, height, result } = useSelector((state) => state.bmi);

    return (
        <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded shadow">
            <h2 className="text-xl font-bold mb-4 text-center">Tính chỉ số BMI</h2>

            <input 
                type="text"
                value={weight}
                onChange={(e) => dispatch(updateInput({ field: 'weight', value: e.target.value }))}
                placeholder="Cân nặng (kg)"
                className="border px-3 py-2 w-full mb-4 rounded"
            />

            <input 
                type="text" 
                value={height}
                onChange={(e) => dispatch(updateInput({ field: 'height', value: e.target.value }))}
                placeholder="Chiều cao (cm)"
                className="border px-3 py-2 w-full mb-4 rounded"    
            />

            <button
                onClick={() => {
                    dispatch(calculateResult());
                    console.log(weight, height)
                }}
                className="bg-gray-500 text-white px-4 py-2 rounded w-full mb-4"
            >
                Tính BMI                
            </button>

            <div className="text-center">
                <p className="text-left height-auto">Kết quả: {result}</p>
            </div>
        </div>
    )
}

export default BMIForm
