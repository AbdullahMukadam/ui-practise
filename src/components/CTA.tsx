import React from 'react'
import { AnimatedTooltip } from './ui/animated-tooltip'
import { Circle } from 'lucide-react';

function CTA() {

  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
  ];

  return (
    <div className='w-full p-2 font-modernist'>
      <div className='w-full p-8 z-50 text-white'>
        <div className='w-full flex items-center justify-between'>
          <div className='w-[70%]'>
            <h1 className='text-6xl text-white'>Designed for Designers. <br /> Powered by <span className='text-[#FF541F]'>AI</span>.</h1>
            <p className='text-white text-base mt-3 font-thin'>Unlock the full potential of your creativity with our AI-powered design assistant. <br /> Explore new dimensions of design</p>
          </div>
          <div className='w-[50%] flex justify-center'>
            <img className='w-25 h-28' src="/images/Vector (2).png" alt="vector" />
          </div>
        </div>
        <div className='w-full p-2 mt-8'>
          <div className='w-full flex items-center gap-6 justify-between'>
            <div className='w-[40%] p-4 bg-[#272829] bg-custom-gradient rounded-2xl'>
              <div className='w-full flex gap-2 justify-between'>
                <p className='text-[#D9D9D9] text-base flex-1'>Skip the blank canvas and spark creativity instantly. Our AI generates high-quality, on-brand design concepts within seconds</p>
                <img className='w-15 h-15 flex-shrink-0 cursor-pointer' src="/images/Background.svg" alt="arrow" />
              </div>
              <h2 className='text-4xl text-white mt-6'>Instant Ideation</h2>
            </div>
            <div className='w-[60%] p-4 bg-[#272829] rounded-2xl'>
              <div className='w-full flex gap-2 justify-between'>
                <p className='text-[#D9D9D9] text-base flex-1'>No two creators are the same, and neither are their styles. Our AI learns from your inputs, understands your aesthetic preferences, and fine-tunes every design</p>
                <img className='w-15 h-15 flex-shrink-0 cursor-pointer' src="/images/Background.svg" alt="arrow" />
              </div>
              <h2 className='text-4xl text-white mt-6'>Smart Adaptability</h2>
            </div>
          </div>
          <div className='w-full flex items-center gap-6 justify-between mt-3'>
            <div className='w-[60%] p-4 bg-[#272829] rounded-2xl'>
              <div className='w-full flex gap-2 justify-between'>
                <p className='text-[#D9D9D9] text-base flex-1'>Design once, export anywhere. Whether you need high-res graphics for print, responsive visuals for the web, mobile-optimized assets,</p>
                <img className='w-15 h-15 flex-shrink-0 cursor-pointer' src="/images/Background.svg" alt="arrow" />
              </div>
              <h2 className='text-4xl text-white mt-6'>Multi-Format Export</h2>
            </div>
            <div className='w-[40%] p-4 bg-[#272829] bg-custom-gradient rounded-2xl'>
              <div className='w-full flex gap-2 justify-between'>
                <p className='text-[#D9D9D9] text-base flex-1'>Say goodbye to repetitive tweaks and endless back-and-forths. With intuitive prompt-based editing</p>
                <img className='w-15 h-15 flex-shrink-0 cursor-pointer' src="/images/Background.svg" alt="arrow" />
              </div>
              <h2 className='text-4xl text-white mt-6'>Seamless Revisions</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full p-2 relative'>
        <div className='w-full h-full relative z-10'>
          <div className='w-full flex items-center justify-center mt-7'>
            <div className='w-[50%] p-2 flex gap-4 items-start'>
              <span className='text-[#D9D9D9] flex-shrink-0'>2025</span>
              <p className='text-white font-bold text-xl'>Whether you're designing for personal projects, creative teams, or large-scale campaigns, our AI-powered platform is built to bring your ideas to life—quickly, beautifully, and intelligently. And the results? The numbers speak for themselves:</p>
            </div>

          </div>
          <div className='w-full  p-2 flex flex-col items-center justify-center'>
            <div className='w-[95%] h-[240px] p-4 mt-20 grid grid-cols-4 gap-4 text-white'>
              <section className='flex flex-col'>
                <h3 className='text-6xl font-bold'>2014</h3>
                <h6 className='text-xl'>Year of establishment</h6>
                <span className='text-gray-700'>More than 10 years in the field</span>
                <div className='w-full flex items-center mt-2'>
                  <AnimatedTooltip items={people} />
                  <img className='h-20 ml-2 -translate-y-2' src="/images/decor1.svg" alt="svg" />
                </div>
              </section>
              <section className='flex flex-col translate-y-14'>
                <h3 className='text-6xl font-bold'>302</h3>
                <h6 className='text-xl'>Projects are launched</h6>
                <span className='text-gray-700'>A lot of projects are done</span>
                <div className='w-full flex items-center mt-2'>
                  <AnimatedTooltip items={people} />
                  <img className='h-20 ml-2 translate-y-2' src="/images/decor2.svg" alt="svg" />
                </div>
              </section>
              <section className='flex flex-col'>
                <h3 className='text-6xl font-bold'>189</h3>
                <h6 className='text-xl'>Clients are satisfied</h6>
                <span className='text-gray-700'>These people love us</span>
                <div className='w-full flex items-center mt-2'>
                  <AnimatedTooltip items={people} />
                  <img className='h-20 ml-2 -translate-y-2' src="/images/decor1.svg" alt="svg" />
                </div>
              </section>
              <section className='flex flex-col translate-y-14'>
                <h3 className='text-6xl font-bold'>12</h3>
                <h6 className='text-xl'>Projects in work</h6>
                <span className='text-gray-700'>What we do right now</span>
                <div className='w-full flex items-center mt-2'>
                  <AnimatedTooltip items={people} />
                  <img className='h-20 ml-2 translate-y-2' src="/images/decor2.svg" alt="svg" />
                </div>
              </section>
            </div>
            <div className='w-full p-1 mt-24 flex items-center justify-center gap-8'>
              <a
                href="#"
                className="flex w-[150px] items-center gap-x-2 rounded-md bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                Get Started
                <span aria-hidden="true">→</span>
              </a>
              <div className='flex gap-3 items-center'>
                <p className='text-gray-400'>Slots are avalible</p>
                <Circle className='text-green-500 bg-green-500 h-3 w-3 rounded-full' />
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default CTA