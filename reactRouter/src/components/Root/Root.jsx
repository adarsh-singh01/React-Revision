//iApp.jsx me bhi likh skte the
import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'//koi bhi chheez ab Outlet ki jagah aayegi

function Root() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Root