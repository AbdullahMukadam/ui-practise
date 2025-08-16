import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='md:w-[80%] w-full md:p-8 p-4 rounded-2xl bg-zinc-950 md:bg-transparent absolute top-2 z-10 flex items-center justify-between font-modernist'>
      <div className='w-[15%] md:w-[15%] flex-shrink-0'>
        <img className='w-12 h-10' src="/images/Vector (1).png" alt="logo" />
      </div>
      
      <div className='md:hidden flex items-center'>
        <button 
          onClick={toggleMenu}
          className='text-white focus:outline-none'
          aria-label='Toggle menu'
        >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            {isMenuOpen ? (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            ) : (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            )}
          </svg>
        </button>
      </div>

      <div className='hidden md:flex w-[40%] pl-2 md:pl-10 items-center justify-start gap-2 md:gap-6 overflow-hidden'>
        <a className='text-white font-semibold text-sm md:text-base whitespace-nowrap' href="/">Home</a>
        <a className='text-white font-thin text-sm md:text-base whitespace-nowrap' href="/services">Services</a>
        <a className='text-white font-thin text-sm md:text-base whitespace-nowrap' href="/contsct">Contact Us</a>
        <a className='text-white font-thin text-sm md:text-base whitespace-nowrap' href="/about">About</a>
      </div>

      {isMenuOpen && (
        <div className='md:hidden absolute top-18 left-0 right-0 bg-zinc-950 bg-opacity-90 p-4 flex flex-col items-center space-y-4'>
          <a className='text-white font-semibold text-base' href="/" onClick={toggleMenu}>Home</a>
          <a className='text-white font-thin text-base' href="/services" onClick={toggleMenu}>Services</a>
          <a className='text-white font-thin text-base' href="/contsct" onClick={toggleMenu}>Contact Us</a>
          <a className='text-white font-thin text-base' href="/about" onClick={toggleMenu}>About</a>
          <button className='bg-[#FF541F] px-5 py-2 rounded-md text-white'>Login</button>
        </div>
      )}

      
      <div className='w-[20%] md:w-[18%] hidden md:block'>
        <button className='bg-[#FF541F] pl-5 pr-5 pt-2 pb-2 rounded-md text-white'>Login</button>
      </div>
    </div>
  )
}