import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { fetchUsers } from "../features/UserSlice"

const UserList = () => {
    const dispatch = useDispatch();
    const { users, status, error } = useSelector((state) => state.users);

    useEffect(() => {
        if (status === 'idle') {
          dispatch(fetchUsers());
        }
    }, [status, dispatch]);

    if (status === 'loading') return <p>Đang tải dữ liệu...</p>;
    if (status === 'failed') return <p>Lỗi: {error}</p>;
    
    console.log(users)

    return (
        <div className="max-w-xl mx-auto mt-10">
            <ul className="space-y-2">
            {users.map((user) => (
                <li key={user.id} className="p-4 bg-white rounded shadow">
                <strong>{user.name}</strong><br />
                    {user.email}
                </li>
            ))}
            </ul>
        </div>
    )
}

export default UserList
