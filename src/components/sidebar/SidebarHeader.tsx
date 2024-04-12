import React from 'react';

export default function SidebarHeader() {
  return (
    <div className='relative w-[100%] h-[180px]'>
        <div className='relative  w-[100%]'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="absolute top-5 right-5 w-10 h-10 text-white text-5xl pt-[5px]">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>

        </div>
        <h1 className='absolute top-20 text-6xl font-semibold text-white flex'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[4rem] h-[4rem] text-6xl ml-2 mr-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
</svg>

            Catalix
        </h1>
    </div>
  )
}
