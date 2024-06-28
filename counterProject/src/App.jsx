import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(15)

  //let counter = 15
  
  const addValue = () => {
    //counter = counter + 1
    
    //INTERVIEW QUES.
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)//after execution it'll return 16 not 19
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1 )
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)//after execution it'll return 19 as every setCounter is accessing privious value and then passing to next one
    if(counter>=20){
      setCounter(20)
  }
  }
  
  const removeValue = () => {
    setCounter(counter - 1)
    if(counter<=0){
      setCounter(0)
  }
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App