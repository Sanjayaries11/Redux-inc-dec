import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>Plus</button>
        <button onClick={() => dispatch(decrement())}>Minus</button>
      </div>
    </section>
  )
}

export default Counter;