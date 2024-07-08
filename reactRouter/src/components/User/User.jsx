import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid}=useParams()//router wali file(main.jsx) me jo hai wahi likkhna pdega
  return (
    
    <div className='text-5xl text-center p-9'>User:{userid}</div>
  )
}

export default User