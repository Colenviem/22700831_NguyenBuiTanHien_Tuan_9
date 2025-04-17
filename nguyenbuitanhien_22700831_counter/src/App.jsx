import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Counter App</h1>
      <Counter />
    </div>
  )
}

export default App
