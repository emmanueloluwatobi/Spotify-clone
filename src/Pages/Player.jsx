import React from 'react'
import { albumsData, assets, songsData } from '../assets/assets.js'
import { useNavigate, useParams } from 'react-router-dom'


const Player = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const album = albumsData.find((item) => item.id === Number(id));
  if (!album) {
    return <div className='text-4xl'>Album not found</div>;
  }
  const songs = songsData.filter(song => song.albumIds?.includes(album.id));

  return (
    <div className='flex-1 bg-[#161616] w-[75%] mx-2.5 rounded-2xl px-8 py-5 overflow-y-auto custom-scrollbar'>

      <div className="flex gap-4">
        <img src={assets.arrow_left} alt="" className='w-5 h-5 cursor-pointer' onClick={() => { navigate(-1) }} />
        <img src={assets.arrow_right} alt="" className='w-5 h-5 cursor-pointer' onClick={() => { navigate(+2) }} />
      </div>

      <div className='flex justify-start gap-5 mt-5'>
        <img src={album.image} alt='' className='w-50 h-50 rounded-sm' />
        <div className="mt-[5.3%]">
          <p className='text-sm'>Public Playlist</p>
          <h1 className="text-[3.2em] font-extrabold ">{album.name}</h1>
          <h3 className='text-[#c7c7c7] '>{album.desc}</h3>
          <div className="flex items-center mt">
            <img src={assets.spotify_logo} alt="" className='w-7 h-7 mr-1' />
            <h3>Spotify</h3>
            <span className='w-1.5 h-1.5 rounded-4xl bg-[#c7c7c7] mx-1.5'></span>
            <h3>58,710 saves</h3>
            <span className='w-1.5 h-1.5 rounded-4xl bg-[#c7c7c7] mx-1.5'></span>
            <h3>about 2 hr 15 min</h3>
            <span className='w-1.5 h-1.5 rounded-4xl bg-[#c7c7c7] mx-1.5'></span>
            <h3>3 new entries</h3>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4 mt-3">
          <img src={assets.play_icon} alt="" className='  bg-green-600 p-3.5 w-13 h-13 cursor-pointer rounded-4xl' />
          <img src={assets.plus_icon} alt="" className=' w-6 h-6 cursor-pointer' />
          <img src={assets.dots} alt="" className=' w-6 h-6 cursor-pointer' />
        </div>
        <div className="flex items-center gap-2 cursor-pointer ">
          <h3 className='text-[#c7c7c7] hover:text-white'>List</h3>
          <img src={assets.menu} alt="" className=' w-5 h-5' />
        </div>
      </div>

      <div>
        <div className=' mt-9 pl-5 pr-11 pb-2 grid grid-cols-[2%_auto_15%_10%_15%] gap-10 w-[100%]  border-b-[1px] border-[#717171]'>
          <div><h3>#</h3></div>
          <div><h3>Title</h3></div>
          <div><h3 className='text-right mr-10'>Plays</h3></div>
          <div><h3>Album</h3></div>
          <div className="flex justify-end items-center">
            <img src={assets.clock_icon} alt="" className='w-4 h-4' />
          </div>
        </div>
        {songs.map((song, index) => (
          <div className='group mt-3 pt-2 pl-5 pr-5 pb-2 grid grid-cols-[2%_auto_15%_10%_15%] gap-10 w-[100%] items-center hover:bg-[#1f1f1f] rounded-sm'>
            <div className='flex justify-center items-center'>
              <h3 className="block group-hover:hidden">{index + 1}</h3>
              <div className='hidden group-hover:block'>
                <img src={assets.play_icon} alt="" className='w-4 h-4' />
              </div>
            </div>
            <div className='flex gap-2 items-center'>
              <img src={song.image} alt="" className='w-11 h-11 cursor-pointer rounded-sm' />
              <div className="flex flex-col">
                <h3 className='text-[16px]'>Pressure</h3>
                <a href="#" className='no-underline hover:underline text-[#c7c7c7] hover:text-white text-[14px]'>{song.artist}</a>
              </div>
            </div>
            <div><h3 className='text-right text-[#c7c7c7] text-[14px] mr-10'>63,826,828</h3></div>
            <div><h3 className='no-underline hover:underline text-[#c7c7c7] hover:text-white text-[14px] cursor-pointer'>Pressure</h3></div>
            <div className="flex justify-end items-center">
              <h3 className=' text-[#c7c7c7] text-[14px]'>{song.duration}</h3>
              <div className='opacity-0 group-hover:opacity-100 '>
                <img src={assets.dots} alt="" className='w-7 h-5 pl-2.5' />
              </div>
            </div>
          </div>
        ))
        }


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
          <img src={assets.instagram} alt="" className='w-10 h-10 p-2 cursor-pointer bg-[#1f1f1f] rounded-4xl hover:bg-[#5a5a5a]' />
          <img src={assets.twitter} alt="" className='w-10 h-10 p-2 cursor-pointer bg-[#1f1f1f] rounded-4xl hover:bg-[#5a5a5a]' />
          <img src={assets.facebook} alt="" className='w-10 h-10 p-2 cursor-pointer bg-[#1f1f1f] rounded-4xl hover:bg-[#5a5a5a]' />
        </div>
      </div>

      <div className="flex justify-start  gap-1 items-center mt-8 mb-12">
        <img src={assets.copyright} alt="" className='w-4 h-4' />
        <h3 className='text-[#c7c7c7] text-[14px]'>2025 Spotify AB</h3>
      </div>

    </div>
  )
}

export default Player
