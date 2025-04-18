import React, { useState } from 'react'
import { login, setUserInfo } from '../features/AuthSlice'
import { useDispatch } from 'react-redux'

const Login = () => {
    const [user, setUser] = useState('');
    const dispatch = useDispatch();

    const handleLogin = () => {
        if (user.trim() !== '') {
          dispatch(login({ name: user }));
            dispatch(setUserInfo({ name: user }));
        }
    };

    return (
        <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded shadow">
            <h2 className="text-xl font-bold mb-4">Đăng nhập</h2>
            <input 
                value={user}
                onChange={(e) => setUser(e.target.value)}
                className="border px-3 py-2 w-full mb-4 rounded"
                type="text" 
                placeholder='Tên người dùng' 
            />
            <button className="bg-gray-500 text-white px-4 py-2 rounded w-full" onClick={handleLogin}>Đăng nhập</button>
        </div>
    )
}

export default Login