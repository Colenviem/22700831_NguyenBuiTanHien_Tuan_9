import {configureStore} from '@reduxjs/toolkit'
import todosReducer from '../features/TodosSlice'

const Store = configureStore({
    reducer: {
        todos: todosReducer
    }
})

export default Store
