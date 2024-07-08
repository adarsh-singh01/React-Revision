import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const daata=useLoaderData()//data k andar gya jo return hua tha
    // const [daata,setDaata]=useState("")
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/adarsh-singh01")
    //     .then(res=>res.json())
    //     .then(res=>setDaata(res)) 
    // },[])
     
  return (
    <div className='flex flex-col justify-center items-center pt-7'>
    
    <img className='rounded-full h-32 w-32' src={daata.avatar_url}/>
    <h1 className='text-3xl p-7 text-center'>{daata.bio}</h1>
    </div>
  )
}

export default Github

//NEECHE KA ALG FILE ME KRNA HI THINK REHTA HAI

export const gitUser=async()=>{
    const response=await fetch('https://api.github.com/users/adarsh-singh01')
    return response.json()
}