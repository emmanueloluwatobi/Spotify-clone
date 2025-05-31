import React, { useState } from 'react'
import songimg from '../assets/img1.jpg'
import plus from '../assets/plus.png'
import play from '../assets/play.png'
import pause from '../assets/pause.png'
import prev from '../assets/prev.png'
import next from '../assets/next.png'
import loop from '../assets/loop.png'
import shuffle from '../assets/shuffle.png'
import plays from '../assets/plays.png'
import mic from '../assets/mic.png'
import queue from '../assets/queue.png'
import volume from '../assets/volume.png'
import mini_player from '../assets/mini_player.png'
import zoom from '../assets/zoom.png'

const Footer = () => {

  const [playBtn, setPlayBtn] = useState (play);

  const  handleClick= () => {
    setPlayBtn(prev => prev === play ? pause : play);
  }


  return (
    <div className='flex justify-between items-center h-[14vh] px-3.5 w-full'>
        <div className="flex items-center  gap-4">
            <img src={songimg} alt="" className='w-15 h-15 rounded-xs' />
            <div className="flex flex-col">
              <h3>Can't Breathe</h3>
              <p>Llona</p>
            </div>
          <img src={plus} alt="" className='w-4 h-4 rounded-xs'/>
        </div>

        <div className="flex flex-col absolute left-1/2 transform -translate-x-1/2">
          <div className="flex justify-center items-center gap-4">
            <img src={shuffle} alt="" className='w-4 h-4 cursor-pointer' />
            <img src={prev} alt=""  className='w-4 h-4 cursor-pointer'/>
            <img src={playBtn} alt="" onClick={handleClick} className='w-5 h-5 cursor-pointer p-2 rounded-3xl bg-[#1f1f1f] w-9 h-9'/>
            <img src={next} alt=""  className='w-4 h-4 cursor-pointer'/>
            <img src={loop} alt=""  className='w-4 h-4 cursor-pointer'/>
          </div>
          <div className="flex justify-center items-center">
            <div>0:00</div>
            <div className='w-[300px]  h-2 bg-[#1f1f1f] rounded-3xl relative  mx-3'>
              <span  className='w-[150px]  bg-[#fff]  h-2 absolute rounded-3xl'></span>
            </div>
            <div>2:56</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <img src={plays} alt=""  className=' w-4 h-4 cursor-pointer'/>
          <img src={mic} alt=""    className=' w-4 h-4 cursor-pointer'  />
          <img src={queue} alt=""  className=' w-4 h-4 cursor-pointer' />
          <img src={volume} alt="" className=' w-4 h-4 cursor-pointer' />
            <div className='w-[100px]  h-2 bg-[#1f1f1f] rounded-3xl relative cursor-pointer'>
              <span  className='w-[50px]  bg-[#fff]  h-2 absolute rounded-3xl  cursor-pointer'></span>
            </div>
          <img src={mini_player} alt=""   className=' w-4 h-4 cursor-pointer' />
          <img src={zoom} alt=""   className=' w-4 h-4 cursor-pointer' />
        </div>
    </div>
  )
}

export default Footer
