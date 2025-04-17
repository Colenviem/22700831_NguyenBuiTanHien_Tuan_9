import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Counter redux</h1>
            <h2>Count: {count}</h2>
            <button style={{ marginRight: 25 }} onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
        </div>
    )
}

export default Counter
