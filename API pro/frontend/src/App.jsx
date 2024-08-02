import React, { useState } from 'react'
import './App.css'

function App() {

  const [jokes,setJokes]=useState([])
  return (
    <>
    <div>ADARSH APP</div>
    <h1>no of jokes : {jokes.length}</h1>
    
    </>
  )
}

export default App