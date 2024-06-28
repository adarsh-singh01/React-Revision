import './App.css'
import Card from './components/card'

function App() {

  let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]


  return (
    <>
    <div className='flex space-x-3'>
    <Card company="Lenovo"/>{/* props contain every passed here in a object */}
    <Card company="Apple"/>
    <Card />
    </div>
    </>
  )
}

export default App
