import React from 'react'

function Button({color="black"}) {

  function handleColor(){
    document.querySelector('body').bgColor=color
  }
  return (
    <div>
      <p className='bg-white px-3 py-2 rounded-xl cursor-pointer ' style={{backgroundColor:color}} onClick={handleColor} >{color}</p>
    </div>
  )
}

export default Button