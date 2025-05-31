import React from 'react'
import {albumsData, artistData, songsData} from '../assets/assets.js'
import { assets } from '../assets/assets.js'
import { Link, useNavigate } from 'react-router-dom';

const Explore = () => {

    const navigate = useNavigate();
  return (
    <div className='flex-1 bg-[#161616] w-[75%] mx-2.5 rounded-2xl px-8 py-5 overflow-y-auto custom-scrollbar'>
        
        <div className="flex gap-4">
            <img src={assets.arrow_left} alt="" className='w-5 h-5 cursor-pointer' onClick={()=>{navigate(0)}}/>
            <img src={assets.arrow_right} alt="" className='w-5 h-5 cursor-pointer' onClick={()=>{navigate(+2)}}/>
        </div>

        <div className="flex justisfy-start items-center gap-3 mt-3">
            <h3 className='text-[15px] bg-white px-3 py-1 rounded-3xl text-black cursor-pointer'>All</h3>
            <h3 className='text-[15px] bg-[#1f1f1f] px-3 py-1 rounded-3xl text-white cursor-pointer'>Music</h3>
            <h3 className='text-[15px] bg-[#1f1f1f] px-3 py-1 rounded-3xl text-white cursor-pointer'>Popcasts</h3>
        </div>

        <div className='mt-3'>
            <h3 className='font-bold text-xl'>Featured Charts</h3>
            <div className="flex overflow-x-auto justify-between custom-scrollbar-explore ">
                {albumsData.map((album) =>(
                    <Link to={`/player/${album.id}`} key={album.id} className='flex-shrink-0 flex flex-col gap-2.5 hover:bg-[#222222] p-3 rounded-2xl'>
                        <img src={album.image} alt="" className='w-[120px] h-[120px] rounded-xl cursor-pointer' />
                        <div className="flex flex-col justify-start items-start">
                            <Link to={`/player/${album.id}`}>
                                <h3 className='text-[15px] font-bold no-underline hover:underline'>{album.name}</h3>
                            </Link>
                            <p className=' truncate max-w-[100px] text-[11px] font-medium'>{album.desc}</p>
                        </div>
                    </Link>
                ))
                }
            </div>
        </div>

        <div className='mt-3'>
            <h3 className='font-bold text-xl'>Made For you</h3>
            <div className="flex overflow-x-auto justify-between  custom-scrollbar-explore">
                {songsData.map((album) =>(
                    <div key={album.id} className='flex-shrink-0 flex flex-col gap-2.5 hover:bg-[#222222] p-3 rounded-2xl'>
                        <img src={album.image} alt="" className='w-[120px] h-[120px] rounded-xl cursor-pointer ' />
                        <div className="flex flex-col justify-start items-start">
                            <h3 className='text-[15px] font-bold'>{album.name}</h3>
                            <p className=' truncate max-w-[100px] text-[11px] font-medium'>{album.desc}</p>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>

        <div className='mt-3'>
            <div className="flex items-center justify-between">
                <h3 className='font-bold text-xl'>Artist</h3>
                <h3 className='text-[14px] cursor-pointer'>View More</h3>
            </div>
            <div className="flex overflow-x-auto justify-between mt-3 custom-scrollbar-explore gap-3">
                {artistData.map((album) =>(
                    <div key={album.id} className='flex-shrink-0 flex flex-col gap-2.5'>
                        <img src={album.image} alt="" className='w-[140px] h-[140px] cursor-pointer rounded-[100%]' />
                        <div className="flex flex-col justify-start items-start">
                            <h3 className='text-[15px] font-bold cursor-pointer pl-1 no-underline hover:underline'>{album.name}</h3>
                            <p className=' truncate max-w-[150px] text-[15px] font-medium pl-1'>{album.desc}</p>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>

        <div className="flex mt-10 pb-12 pt-18 px-2 justify-between border-1 border-y-gray-600 border-x-transparent">
                <div>
                    <h3 className='text-[18px] font-bold'>Company</h3>
                    <div className=' flex flex-col gap-1.5'>
                        <a href="#" className='no-underline hover:underline text-[#c7c7c7] hover:text-white font-[14px]'>About</a>
                        <a href="#" className='no-underline hover:underline text-[#c7c7c7] hover:text-white font-[14px]'>Jobs</a>
                        <a href="#" className='no-underline hover:underline text-[#c7c7c7] hover:text-white font-[14px]'>For the Record</a>
                    </div>
                </div>
                <div>
                    <h3 className='text-[18px] font-bold'>Communities</h3>
                    <div className=' flex flex-col gap-1.5'>
                        <a href="#" className='no-underline hover:underline text-[#c7c7c7] hover:text-white font-[14px]'>For Artists</a>
                        <a href="#" className='no-underline hover:underline text-[#c7c7c7] hover:text-white font-[14px]'>Developers</a>
                        <a href="#" className='no-underline hover:underline text-[#c7c7c7] hover:text-white font-[14px]'>Advertising</a>
                        <a href="#" className='no-underline hover:underline text-[#c7c7c7] hover:text-white font-[14px]'>Investors</a>
                        <a href="#" className='no-underline hover:underline text-[#c7c7c7] hover:text-white font-[14px]'>Vendors</a>
                    </div>
                </div>
                <div>
                    <h3 className='text-[18px] font-bold'>Useful links</h3>
                    <div className=' flex flex-col gap-1.5'>
                        <a href="#" className='no-underline hover:underline text-[#c7c7c7] hover:text-white font-[14px]'>Support</a>
                        <a href="#" className='no-underline hover:underline text-[#c7c7c7] hover:text-white font-[14px]'>Free Mobile App</a>
                    </div>
                </div>
                <div>
                    <h3 className='text-[18px] font-bold'>Spotify Plans</h3>
                    <div className=' flex flex-col gap-1.5'>
                        <a href="#" className='no-underline hover:underline text-[#c7c7c7] hover:text-white font-[14px]'>Premium Individual</a>
                        <a href="#" className='no-underline hover:underline text-[#c7c7c7] hover:text-white font-[14px]'>Premium Duo</a>
                        <a href="#" className='no-underline hover:underline text-[#c7c7c7] hover:text-white font-[14px]'>Premium Family</a>
                        <a href="#" className='no-underline hover:underline text-[#c7c7c7] hover:text-white font-[14px]'>Premium Student</a>
                        <a href="#" className='no-underline hover:underline text-[#c7c7c7] hover:text-white font-[14px]'>Spotify Free</a>
                    </div>
                </div>
                <div className='flex justify-start  gap-2.5'>
                    <img src={assets.instagram} alt="" className='w-10 h-10 p-2 cursor-pointer bg-[#1f1f1f] rounded-4xl hover:bg-[#5a5a5a]'/>
                    <img src={assets.twitter} alt=""   className='w-10 h-10 p-2 cursor-pointer bg-[#1f1f1f] rounded-4xl hover:bg-[#5a5a5a]'/>
                    <img src={assets.facebook} alt=""  className='w-10 h-10 p-2 cursor-pointer bg-[#1f1f1f] rounded-4xl hover:bg-[#5a5a5a]'/>
                </div>
        </div>

        <div className="flex justify-start  gap-1 items-center mt-8 mb-12">
            <img src={assets.copyright} alt="" className='w-4 h-4' />
            <h3 className='text-[#c7c7c7] text-[14px]'>2025 Spotify AB</h3>
        </div>

    </div>
  )
}

export default Explore
