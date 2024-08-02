import React, { useState } from 'react'
import './App.css'
function App() {

  //IN REACT JAB BHI STATE YA PROPS ME KOI CHANGE HOTA HAI TO COMPONENT RE-RENDER HOTA HAI

  console.log("app rendered",Math.random());
  const [value,setValue]=useState(1)
  //const [mulVal,setMulVal]=useState(1)

  let mulVal=value*5//kyuki app re-render hoga hi isliye ise sese likh diya
  const mulBy5=()=>{
    //setMulVal(value*5)
    setValue(value+1)//idk why but without this not working

    //RENDER HOGA YA NHI K SCENARIO//btw shuru me ek baar to hota hi hai
    setValue(1)//render nhi hoga kyuki pehle se value 1 hai
    setValue(3)//ek baar bs render hoga 3 hone k liye phir ni hoga
    
    
    //agar upar kuch aesa hota to phir 
    /*const [value,setValue]=useState({
        value:0
    })*/
    /*Tab agr aese likhte agr
    setValue({
      value:0
    })*///Tab har baar render hota kyuki ye object hai...ye memory reference leta hai isliye har baar change hota hai
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