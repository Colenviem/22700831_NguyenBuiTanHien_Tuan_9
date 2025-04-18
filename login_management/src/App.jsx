import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector } from 'react-redux'
import LoginForm from './components/LoginForm'
import Welcome from './components/Welcome'

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start">
      {isLoggedIn ? <Welcome /> : <LoginForm />}
    </div>
  )
}

export default App
