import React from 'react'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  return (
    <UserContextProvider>
    CONTEXT API
    
    <Login/>
    <Profile/>
    </UserContextProvider>
    
  )
}

export default App