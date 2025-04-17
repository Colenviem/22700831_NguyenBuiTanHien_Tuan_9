import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, toggleTodo, removeTodo } from '../features/TodosSlice'

const TodoList = () => {
  const [text, setText] = useState('')
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const data = ['1. Học React', '2. Học Redux', '3. Học Redux Toolkit']

  const didInit = useRef(false)

  useEffect(() => {
    if (didInit.current) return
    didInit.current = true

    data.forEach((item) => {
      dispatch(addTodo(item))
    })
  }, [dispatch])

  const handleAdd = () => {
    if (text.trim() === '') return
    dispatch(addTodo(text))
    setText('')
  }

  return (
    <div>
      <h2>📝 To-Do List</h2>
      <input
        style={{ height: '30px', padding: 5, marginRight: 10, width: '300px' }}
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Nhập công việc..."
      />
      <button onClick={handleAdd}>Thêm</button>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              marginTop: 10,
              textDecoration: todo.completed ? 'line-through' : 'none',
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              border: '1px solid #ccc',
              padding: '5px 10px',
              lineHeight: '1.5'
            }}>
            <span onClick={() => dispatch(toggleTodo(todo.id))}style={{ cursor: 'pointer', marginRight: 10 }}>
              {todo.text}
            </span>
            <button onClick={() => dispatch(removeTodo(todo.id))} style={{ marginLeft: 10 }}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
