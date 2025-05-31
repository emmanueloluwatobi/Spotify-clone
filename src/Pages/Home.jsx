import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../component/Navbar';
import Sidebar from '../component/Sidebar';
import Footer from '../component/Footer';

const Home = () => {
  return (
    <div  className='bg-black text-white h-screen'>
      <Navbar />
      <div className="flex h-[74%] ">
        <Sidebar />
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}

export default Home;
