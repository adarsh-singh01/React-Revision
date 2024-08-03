import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  //const[jokes,error,loading]=customReactQuery('/api/jokes')

  const [jokes,setJokes]=useState([])
  const [error,setError]=useState(false)
  const [loading,setLoading]=useState(true)
  const [search,setSearch]=useState('best')

  useEffect(()=>{
    const controller=new AbortController()//ye race condition solve krega...isse hoga ye ki wo UI me changes nhi krege lekin wo requests jayegi...requests na jaye wo debounce conecept hai
    //here we need to make a async await func and hum chahte ki sb site load ho sbse pehle ye ho isliye IIFE bnaege
    {/*; to tell ki upar se related nhi hai new thing hai */};(async()=>{
      try {
        setError(false)
        setLoading(true)
        const response=await axios.get('/api/jokes?type='+search,{
          signal:controller.signal
        })
        console.log(response.data)
        setJokes(response.data)
        setLoading(false)
      } catch (error) {
        if (axios.isCancel(error)) {//jo requests purani ho gyi wo yaha handle hogi
          console.log('request canceled',error.message)
          return
        }
        setError(true)
        console.log(error)
        setLoading(false)
      }
    }
    )()

    //cleanup code
    return()=>{
      controller.abort()
    }
  },[search])

  // if(error){return <p>something went wrong</p>}

  // if(loading){return <p>loading...</p>}


  return (
    <>
    <div>ADARSH APP</div>
    <input type='text' 
      placeholder='Search kro'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
    />
    {loading&& (<h1>Loading...</h1>)}
    {error&& (<h1>something went wrong</h1>)}
    <h1>no of jokes : {jokes.length}</h1>
    
    </>
  )
}

export default App

//Neeche wale  me comments sign boht lge hai dekh lena
//REACT QUERY wagera bhi aesi hi hoti hai
/*const customReactQuery=(urlPath)=>{
  
  const [jokes,setJokes]=useState([])
  const [error,setError]=useState(false)
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    //here we need to make a async await func and hum chahte ki sb site load ho sbse pehle ye ho isliye IIFE bnaege
    {/*; to tell ki upar se related nhi hai new thing hai ;(async()=>{*/
      /*try {
        setError(false)
        setLoading(true)
        const response=await axios.get(urlPath)
        console.log(response.data)
        setJokes(response.data)
        setLoading(false)
      } catch (error) {
        setError(true)
        console.log(error)
        setLoading(false)
      }
    }
    )()
  },[])


  return [jokes,error,loading]
}*/