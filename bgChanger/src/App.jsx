import React, { useState } from 'react'
import Button from './Button'


function App() {

  const [color,setColor]=useState("red")


  return (
    <div className='h-screen' style={{backgroundColor:color}}>
      <button className='bg-white px-3 py-2 rounded-xl cursor-pointer' onClick={()=>setColor("blue")}>blue</button>
      <button className='bg-white px-3 py-2 rounded-xl cursor-pointer' onClick={()=>setColor("yellow")}>yellow</button>
      <button className='bg-white px-3 py-2 rounded-xl cursor-pointer' onClick={()=>setColor("orange")}>orange</button>
    </div>
    //OnClick wants a fnunction but if we write setColor then its only reference and if we want to pass argumemts then we have to execute the function that is why we write arrow func
    /*<div className='flex space-x-3 justify-center p-4 '>
      <Button color='red' />
      <Button color='violet' />
      <Button color='orange' />
      <Button />
      <Button color='yellow' />
    </div>*/
  )
}

export default App