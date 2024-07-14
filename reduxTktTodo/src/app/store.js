import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice'
export const store=configureStore({
    reducer:todoReducer//ek se zyade bhi reducers ho skte hai
})

