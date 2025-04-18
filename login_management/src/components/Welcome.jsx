import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/AuthSlice'

const Welcome = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user)

    return (
        <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded shadow text-center">
            <h2 className="text-xl font-bold mb-4">Chào mừng, {user?.name}!</h2>
            <p className="text-xl font-light mb-4">Bạn đã đăng nhập thành công.</p>
            <button className="bg-gray-500 text-white px-4 py-2 rounded w-full" onClick={() => dispatch(logout())}>Đăng xuất</button>
        </div>
    )
}

export default Welcome
