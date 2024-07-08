import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import { About, Contact, Github, Home, Root, User } from './components/index.js'
import { gitUser } from './components/Github/Github.jsx'

// const router=createBrowserRouter([{
//   path:'/',
//   element:<Root/>,
//   children:[
//     {
//       path:'',
//       element:<Home/>
//     },
//     {
//       path:'/about',
//       element:<About/>
//     },
//     {
//       path:'/contact',
//       element:<Contact />
//     }
    
//   ]

// }])

const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Root />}>
    <Route path='' element={<Home />}/>
    <Route path='about' element={<About />}/>
    <Route path='contact' element={<Contact />}/>
    <Route path='github' element={<Github />}
      loader={gitUser}//yaha pura api call likh skte hai
    />
    <Route path='user/:userid' element={<User />}/>{/*iss userid ka access hume component me milega */}
  </Route>

))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
