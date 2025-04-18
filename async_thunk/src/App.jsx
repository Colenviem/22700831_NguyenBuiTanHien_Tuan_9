import { useState } from 'react'
import './App.css'
import UserList from './components/UserList'

function App() {

  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold text-center mt-10'>Danh sách người dùng</h1>
      <UserList />
    </div>
  )
}

export default App
