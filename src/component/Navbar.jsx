import React from 'react'
import logo from '../assets/logo.png'
import home from '../assets/home.png'
import search from '../assets/search.png'
import music from '../assets/music.png'
import arrowdown from '../assets/arrowdown.png'
import bell from '../assets/bell.png'
import group from '../assets/group.png'

const Navbar = () => {
  return (
    <div className='w-full h-[12%] flex justify-between items-center pl-6 pr-6'>
        <div className='flex items-center'>
            <img src={logo} alt="" className='w-11'/>
        </div>
        <div className='flex items-center gap-3 ml-[220px]'>
                <img src={home} alt="" className=' bg-[#1f1f1f] rounded-4xl p-2.5 w-12'/>
                <div className='flex items-center bg-[#1f1f1f] px-4.5 py-2.5 rounded-full hover:bg-red-500 cursor-pointer'> 
                    <img src={search} alt=""  className='w-6'/>
                    <input type="text" placeholder='What do you want to play?' className='mx-3 outline-0 text-[#fff] w-[300px] bg-transparent' />
                    <img src={music} alt="" className='w-7'/>
                </div>
        </div>
        <div className="flex items-center gap-8 ">
            <div className="flex items-center cursor-pointer">
                <img src={arrowdown} alt="" className='w-5 h-5'/>
                <p  className='text-1 font-medium pl-1.5 '>Install App</p>
            </div>
            <img src={bell} alt="" className='w-6 h-6 cursor-pointer' />
            <img src={group} alt=""  className='w-6 h-6 cursor-pointer'/>
            <div className=' cursor-pointer flex items-center justify-center bg-[#1f1f1f] w-12 h-12 rounded-full'>
            <h3 className=' flex items-center justify-center font-bold bg-orange-400 text-white w-8 h-8 rounded-full text-lg'>
                E
            </h3>
            </div>
        </div>
    </div>
  )
}

export default Navbar
