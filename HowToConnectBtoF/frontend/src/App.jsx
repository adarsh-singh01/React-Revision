import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [jokes,setJokes]=useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)//we used axios kyuki usmne apne aap ise JSON pe parse kr diya
    })
    .catch((error)=>{
      console.log(error)
    })
  })

  return (
    <div>
      <h1>One Step For A Man</h1>
      <p>JOKES : {jokes.length}</p>
      
      {jokes.map((joke,index)=>(
        <div key={joke.id}>
      <p >{joke.question}</p>
      <p>{joke.answer}</p>
      </div>
    ))}
    </div>

    
  )
}
export default App;