import React, { useState } from 'react'
import { Todoprovider } from './contexts'

function App() {
const [todos,setTodos]=useState([])

const addTodo=(todo)=>{
  //setTodos(todo)//doing this will delete all existing ones...we'll use spread operator
  setTodos((prev)=>[{id:Date.now(),...todo},...prev])
}

const updatedTodo=(id,todo)=>{
  setTodos((prev)=>prev.map((prevTodo)=>(
    prevTodo.id===id?todo:prevTodo
  )))
}

const deleteTodo=(id)=>{
  setTodos((prev)=> prev.filter((todo)=>todo.id!==id))//filter me jo contion meet krega wo array me nhi ayega
}

const toggleComplete=(id)=>{
  setTodos((prev)=>prev.map((prevtodo)=>prevtodo===id?{...prevtodo,completed:!prevtodo.completed}:prevtodo))
}

  return (
    <Todoprovider value={{todos,addTodo,updatedTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </Todoprovider>
  )
}

export default App