import React, { useState } from 'react'
import './App.css'
function App() {

  //IN REACT JAB BHI STATE YA PROPS ME KOI CHANGE HOTA HAI TO COMPONENT RE-RENDER HOTA HAI
  const [value,setValue]=useState(1)
  //const [mulVal,setMulVal]=useState(1)

  let mulVal=value*5//kyuki app re-render hoga hi isliye ise sese likh diya
  const mulBy5=()=>{
    //setMulVal(value*5)
    setValue(value+1)//idk why but without this not working
  }
  return (
    <div>
      <h1>Main Val : {value}</h1>
      <button
      onClick={mulBy5}>Click me</button>
      <h2>Mul Val by 5 : {mulVal}</h2>
    </div>
  )
}

export default App