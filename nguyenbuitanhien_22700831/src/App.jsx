import { useState } from 'react'
import './App.css'
import CounterUseReducer from './components/CounterUseReducer'
import Counter from './components/Counter'

function App() {
  return (
    <div>
      <CounterUseReducer/>
      <Counter/>
    </div>
  )
}

export default App
