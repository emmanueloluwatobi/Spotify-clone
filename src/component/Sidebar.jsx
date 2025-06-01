import React, { useRef, useState } from 'react';
import plus from '../assets/plus.png';
import zoom  from '../assets/zoom.png';
import search from '../assets/search.png'
import menu from '../assets/menu.png'
import heart from '../assets/heart.png'
import{artistData} from '../assets/assets.js'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [width, setWidth] = useState(270); // initial width in px
  const sidebarRef = useRef(null);
  const isResizing = useRef(false);

  const handleMouseDown = () => {
    isResizing.current = true;
    document.body.style.cursor = 'ew-resize';
  };

  const handleMouseMove = (e) => {
    if (!isResizing.current) return;
    const newWidth = Math.max(315, Math.min(500, e.clientX)); // min 150px, max 500px
    setWidth(newWidth);
  };

  const handleMouseUp = () => {
    isResizing.current = false;
    document.body.style.cursor = '';
  };

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  });

  return (
    <div ref={sidebarRef} className="bg-[#121212]  relative flex flex-col  rounded-2xl z-index-99999 ml-3v" style={{ width: `${width}px`}}>
      <div className='p-4 shadow-lg rounded-3xl w-full'  style={{ boxShadow: '0 40px 80px 0 rgba(0,0,0,0.45)' }}>
        <div className="flex justify-between " >
        <h3 className='text-[20px] font-bold'>Your Library</h3>
        <div className="flex gap-6 items-center">
          <img src={plus} alt="" className='w-10 h-10 cursor-pointer p-2 rounded-4xl hover:bg-[#1f1f1f]' />
          <img src={zoom} alt="" className='w-10 h-10 cursor-pointer p-2 rounded-4xl hover:bg-[#1f1f1f] mr-2' />
        </div>
        </div>
        <div className="flex justify-start gap-3 w-[100%] mt-3 items-center">
        <h3 className='text-[13px] px-3 py-1 font-medium bg-[#1f1f1f] rounded-3xl cursor-pointer'>Playlists</h3>
        <h3 className='text-[13px] px-3 py-1 font-medium bg-[#1f1f1f] rounded-3xl cursor-pointer'>Artists</h3>
        <h3 className='text-[13px] px-3 py-1 font-medium bg-[#1f1f1f] rounded-3xl cursor-pointer'>Albums</h3>
        </div>
      </div>

      <div className=" overflow-y-auto custom-scrollbar flex-1 w-full px-2.5  mt-1.5">
        <div className="flex justify-between  items-center">
        <img src={search} alt="" className='w-9 h-9 p-2 rounded-4xl cursor-pointer hover:bg-[#1f1f1f]'/>
          <div className="flex items-center gap-3 cursor-pointer">
            <h3 className='text-[15px] font-medium'>Recent</h3>
            <img src={menu} alt="" className='w-5 h-5'/>
          </div>
        </div>
        
        <div className="flex items-center justify-start gap-3 mt-3 cursor-pointer hover:bg-[#ffffff1a] rounded-xs p-3">
          <img src={heart} alt="" className='w-12 h-12 p-4 bg-amber-200 rounded-xs'/>
          <div>
            <h3  className='text-[15px] font-medium'>Liked Songs</h3>
            <p className='text-[14px] font-medium'>Playlist - 129 songs</p>
          </div>
        </div>

        <div className="flex items-center justify-start gap-3 mb-6">
          <div className='w-full'>
            {artistData.map(artist =>(
              <Link to={`/artist/${artist.name}`} key={artist.id} className='flex items-center justify-start gap-3 cursor-pointer hover:bg-[#ffffff1a] p-3 rounded-xs'>
                <img src={artist.image} className='w-12 h-12 rounded-4xl'/>
                <div>
                  <Link to={`/artist/${artist.name}`}>
                    <h3 className='font-medium'>{artist.name}</h3>
                  </Link>
                  <p className='text-[15px] text-gray-400'>{artist.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 h-full w-1 cursor-ew-resize hover:bg-gray-700  bg-transparent opacity-50 cursor-pointer" onMouseDown={handleMouseDown}/>
    </div>
  );
};

export default Sidebar;
