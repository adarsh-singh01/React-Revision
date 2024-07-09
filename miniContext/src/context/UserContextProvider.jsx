import React from 'react'
import UserContext from './UserContext'
import { useState } from 'react'


function UserContextProvider({children}) {
    const[user,setUser]=useState(null)
  return (
    <UserContext.Provider value={{user,setUser}}>{/*humne iss value prop me object pass krdiya jisme likhna h kiskis cheez ka access dena h */}
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider