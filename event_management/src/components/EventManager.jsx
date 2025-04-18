import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addEvent, deleteEvent, editEvent } from '../features/EventSlice'

const EventManager = () => {
    const events = useSelector((state) => state.events)
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [editId, setEditId] = useState(null)

    const handleSubmit = () => {
        if (!title.trim()) return;
    
        if (editId) {
          dispatch(editEvent({ id: editId, updatedEvent: { title, desc } }));
          setEditId(null);
        } else {
          dispatch(addEvent({ title, desc }));
        }
        setTitle('');
        setDesc('');
    };
    
    const handleEdit = (event) => {
        setEditId(event.id);
        setTitle(event.title);
        setDesc(event.desc);
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-bold mb-4 text-center">Quản lý sự kiện</h2>

            <div className="mt-4">
                <input 
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Tiêu đề sự kiện"    
                    className="border px-3 py-2 w-full mb-2 rounded"
                />

                <input 
                    type="text" 
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder="Mô tả sự kiện" 
                    className="border px-3 py-2 w-full mb-2 rounded"
                />

                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                    onClick={handleSubmit}
                >
                    {editId ? 'Cập nhật' : 'Thêm sự kiện'}
                </button>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-2">Danh sách sự kiện</h3>
            <ul className="space-y-3 mt-2">
                {events.map((event) => (
                    <li key={event.id} className="p-3 bg-gray-100 rounded flex justify-between items-start">
                        <div>
                            <h3 className="font-semibold">{event.title}</h3>
                            <p className="text-gray-600 text-sm">{event.desc}</p>
                        </div>
                        <div className="flex gap-2">
                            <button onClick={() => handleEdit(event)} className="text-blue-600">Sửa</button>
                            <button onClick={() => dispatch(deleteEvent(event.id))} className="text-red-600 ml-2">Xóa</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default EventManager
