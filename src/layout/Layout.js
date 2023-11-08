import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <Navbar />

        <div id="container" className='p-5'>
          <Outlet />
        </div>

        <Footer />
    </div>
  )
}

export default Layout;