import React from 'react'

export default function Navbar() {
  return (
    <div className='w-screen h-12 bg-neutral-100 md:bg-[#005450] lg:bg-[#005450] xl:bg-[#005450] flex items-center justify-center'>
      {/* header */}
      <nav className='text-green-100 flex justify-center items-center gap-5'>
        <a href='/'>Home</a>
        <a href='/about'>About</a>
        <a href='/upload'>Detect</a>
        <a href='/report'>Dashboard</a>
      </nav>
    </div>
  );
}
