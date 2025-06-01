import React from 'react'
import { artistData, assets, songsData } from '../assets/assets.js'
import { useNavigate, useParams } from 'react-router-dom'

const Artist = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const artist = artistData.find((item) => item.name === name);

  const artistsongs = songsData.filter(song => song.artistIds?.includes(artist.id));

  if (!artist) {
    return <div className='text-4xl'>Artist not found</div>;
  }

  return (
    <div className='flex-1 bg-[#161616] w-[75%] mx-2.5 rounded-2xl px-8 py-5 overflow-y-auto custom-scrollbar'>

      <div className="flex gap-4">
        <img src={assets.arrow_left} alt="" className='w-5 h-5 cursor-pointer' onClick={() => { navigate(-1) }} />
        <img src={assets.arrow_right} alt="" className='w-5 h-5 cursor-pointer' onClick={() => { navigate(+2) }} />
      </div>

      <div className="flex justify-start gap-5 mt-3 items-center">
        <img src={artist.image} alt="" className='w-47 h-47 rounded-[100%] ' />
        <div className='mt-[]'>
          <div className="flex items-center gap-1">
            <img src={assets.verified} alt="" className='w-8 h-8' />
            <h2 className='text-[16px] font-semibold'> Verified Artist</h2>
          </div>
          <h1 className="text-[4.3em] font-extrabold ">{artist.name}</h1>
          <p>{artist.listener} monthly listeners</p>
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex items-center gap-5 mt-3">
          <img src={assets.play_icon} alt="" className='  bg-green-600 p-3.5 w-13 h-13 cursor-pointer rounded-4xl' />
          <h3 className=' border-1 border-[#787878] px-3 py-1.5 rounded-2xl font-semibold text-[14px] cursor-pointer hover:border-[#fff]'>Following</h3>
          <img src={assets.dots} alt="" className=' w-6 h-6 cursor-pointer' />
        </div>
      </div>

      <div className='mt-3'>
        <h2 className='text-[25px] font-semibold'>Popular</h2>
      </div>

      <div>
        {artistsongs.map((song, index) => (
          <div className='group mt-3 pt-2 pl-5 pr-5 pb-2 grid grid-cols-[2%_auto_15%_2%_10%] gap-10 w-[100%] items-center hover:bg-[#1f1f1f] rounded-sm'>
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
            <div><h3 className='text-center text-[#c7c7c7] text-[14px] mr-10'>63,826,828</h3></div>
            <div className='opacity-0 group-hover:opacity-100 '>
              <img src={assets.plus_icon} alt="" className='w-3.5 h-3.5 cursor-pointer' />
            </div>
            <div className="flex justify-end items-center">
              <h3 className=' text-[#c7c7c7] text-[14px]'>{song.duration}</h3>
              <div className='opacity-0 group-hover:opacity-100 '>
                <img src={assets.dots} alt="" className='w-7 h-5 pl-2.5' />
              </div>
            </div>
          </div>
        ))
        }
        <div className="flex mt-3">
          <h3 className='font-semibold text-[13px] cursor-pointer text-[#c7c7c7] hover:text-[#fff]'> See More</h3>
        </div>
      </div>

      <div className="flex mt-3 justify-between items-center">
        <h3 className='text-[25px]  font-bold no-underline hover:underline cursor-pointer'>Discography</h3>
        <h3 className='font-semibold text-[13px] cursor-pointer text-[#c7c7c7] hover:text-[#fff]'> Show All</h3>
      </div>

      <div className='mt-3'>
        <div className="flex overflow-x-auto justify-between  custom-scrollbar-explore">
          {songsData.map((album) => (
            <div key={album.id} className='flex-shrink-0 flex flex-col gap-2.5 hover:bg-[#222222] p-3 rounded-2xl cursor-pointer relative group'>
              <img src={album.image} alt="" className='w-[190px] h-[190px] rounded-xl cursor-pointer ' />
              <div className="flex flex-col justify-start items-start">
                <h3 className='text-[15px] font-bold'>{album.name}</h3>
                <p className=' truncate max-w-[170px] text-[11px] font-medium'>{album.desc}</p>
              </div>
              <div className="flex absolute bottom-17 right-5 transform translate-y-2 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                <img src={assets.play_icon} alt="Play" className="bg-green-600 p-3.5 w-13 h-13 cursor-pointer rounded-4xl" />
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

export default Artist
