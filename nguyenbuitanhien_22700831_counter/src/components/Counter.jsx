import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './CounterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Counter (Redux Toolkit): {count}</h2>
      <button onClick={() => dispatch(increment())}>+1</button>{' '}
      <button onClick={() => dispatch(decrement())}>-1</button>{' '}
    </div>
  );
};

export default Counter;
