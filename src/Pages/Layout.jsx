import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { BsArrowUpShort } from 'react-icons/bs'
const Layout = () => {
  return (
    <div className='relative'>
        <Header/>
            <Outlet/>
        <Footer/>
           

    </div>
  )
}

export default Layout