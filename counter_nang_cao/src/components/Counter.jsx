import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, incrementByAmount, reset } from '../features/CounterSlice'

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value)
    const [step, setStep] = useState(1)

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow text-center">
            <h2 className="text-2xl font-bold mb-4">Bộ đếm nâng cao</h2>
            <p className="text-xl mb-4">Giá trị hiện tại: <span className="font-semibold">{count}</span></p>

            <input
                type="number"
                value={step}
                onChange={(e) => setStep(Number(e.target.value))}
                className="border px-3 py-2 w-full mb-4 rounded"
                placeholder="Nhập bước tăng"
            />

            <div className="space-y-2">
                <button
                onClick={() => dispatch(incrementByAmount(step))}
                className="bg-gray-300 text-white px-4 py-2 rounded w-full"
                >
                    Tăng theo {step}
                </button>

                <button
                onClick={() => dispatch(increment())}
                className="bg-gray-300 text-white px-4 py-2 rounded w-full"
                >
                    Tăng +1
                </button>

                <button
                onClick={() => dispatch(reset())}
                className="bg-gray-300 text-white px-4 py-2 rounded w-full"
                >
                    Reset
                </button>
            </div>
        </div>
    )
}

export default Counter
