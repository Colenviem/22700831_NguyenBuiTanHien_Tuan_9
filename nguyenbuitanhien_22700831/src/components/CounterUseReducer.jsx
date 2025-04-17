import React , {useReducer} from 'react'

const initialState  = 0;

const calc = (state, action) => {
    switch (action.type) {
        case 'increment':
          return state + 1;
        case 'decrement':
          return state - 1;
        default:
          return state;
    }
}

const CounterUseReducer = () => {
    const [count, dispatch] = useReducer(calc, initialState);

    return (
        <div>
            <h1>Counter useReducer</h1>
            <h2>Count: {count}</h2>
            <button style={{ marginRight: 25 }} onClick={() => dispatch({ type: 'increment' })}>+1</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
        </div>
    )
}

export default CounterUseReducer
