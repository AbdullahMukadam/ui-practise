import React from 'react'

export default function Navbar() {
  return (
    <div className='w-[80%] p-8 bg-transparent absolute top-2 z-10 flex items-center justify-between font-modernist'>
        <div className='w-[15%]'>
          <img className='w-12 h-10 ' src="/images/Vector (1).png" alt="logo" />
        </div>
        <div className='w-[50%] pl-10 flex items-center justify-start gap-6'>
          <a className='text-white font-semibold ' href="/">Home</a>
          <a className='text-white font-thin' href="/services">Services</a>
          <a className='text-white font-thin' href="/contsct">Contact Us</a>
          <a className='text-white font-thin' href="/about">About</a>
        </div>
        <div className='w-[20%}'>
           <button className='bg-[#FF541F] pl-5 pr-5 pt-2 pb-2 rounded-md text-white'>Login</button>
        </div>
    </div>
  )
}
