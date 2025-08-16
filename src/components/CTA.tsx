
import { AnimatedTooltip } from './ui/animated-tooltip'
import { Circle } from 'lucide-react';

function CTA() {

  // const people = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     designation: "Software Engineer",
  //     image:
  //       "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  //   },
  //   {
  //     id: 2,
  //     name: "Robert Johnson",
  //     designation: "Product Manager",
  //     image:
  //       "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //   },
  //   {
  //     id: 3,
  //     name: "Jane Smith",
  //     designation: "Data Scientist",
  //     image:
  //       "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  //   },
  // ];

  const people1 = [
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
  ];

  return (
    <div className='w-full p-2 font-modernist'>
      <div className='w-full p-4 md:p-8 z-50 text-white'>
        <div className='w-full flex flex-col md:flex-row md:items-center justify-between'>
          <div className='w-full md:w-[70%] mb-6 md:mb-0'>
            <h1 className='text-3xl md:text-6xl text-white'>Designed for Designers. <br /> Powered by <span className='text-[#FF541F]'>AI</span>.</h1>
            <p className='text-white text-sm md:text-base mt-3 font-thin'>Unlock the full potential of your creativity with our AI-powered design assistant. <br className='hidden md:block' /> Explore new dimensions of design</p>
          </div>
          <div className='w-full md:w-[50%] flex justify-center'>
            <img className='w-16 h-20 md:w-25 md:h-28' src="/images/Vector (2).png" alt="vector" />
          </div>
        </div>
        <div className='w-full p-2 mt-6 md:mt-8'>
          <div className='w-full flex flex-col md:flex-row items-center gap-4 md:gap-6 justify-between'>
            <div className='w-full md:w-[40%] p-4 bg-[#272829] bg-custom-gradient rounded-2xl'>
              <div className='w-full flex gap-2 justify-between'>
                <p className='text-[#D9D9D9] text-sm md:text-base flex-1'>Skip the blank canvas and spark creativity instantly. Our AI generates high-quality, on-brand design concepts within seconds</p>
                <img className='w-12 h-12 md:w-15 md:h-15 flex-shrink-0 cursor-pointer' src="/images/Background.svg" alt="arrow" />
              </div>
              <h2 className='text-2xl md:text-4xl text-white mt-4 md:mt-6'>Instant Ideation</h2>
            </div>
            <div className='w-full md:w-[60%] p-4 bg-[#272829] rounded-2xl'>
              <div className='w-full flex gap-2 justify-between'>
                <p className='text-[#D9D9D9] text-sm md:text-base flex-1'>No two creators are the same, and neither are their styles. Our AI learns from your inputs, understands your aesthetic preferences, and fine-tunes every design</p>
                <img className='w-12 h-12 md:w-15 md:h-15 flex-shrink-0 cursor-pointer' src="/images/Background.svg" alt="arrow" />
              </div>
              <h2 className='text-2xl md:text-4xl text-white mt-4 md:mt-6'>Smart Adaptability</h2>
            </div>
          </div>
          <div className='w-full flex flex-col md:flex-row items-center gap-4 md:gap-6 justify-between mt-3'>
            <div className='w-full md:w-[60%] p-4 bg-[#272829] rounded-2xl'>
              <div className='w-full flex gap-2 justify-between'>
                <p className='text-[#D9D9D9] text-sm md:text-base flex-1'>Design once, export anywhere. Whether you need high-res graphics for print, responsive visuals for the web, mobile-optimized assets,</p>
                <img className='w-12 h-12 md:w-15 md:h-15 flex-shrink-0 cursor-pointer' src="/images/Background.svg" alt="arrow" />
              </div>
              <h2 className='text-2xl md:text-4xl text-white mt-4 md:mt-6'>Multi-Format Export</h2>
            </div>
            <div className='w-full md:w-[40%] p-4 bg-[#272829] bg-custom-gradient rounded-2xl'>
              <div className='w-full flex gap-2 justify-between'>
                <p className='text-[#D9D9D9] text-sm md:text-base flex-1'>Say goodbye to repetitive tweaks and endless back-and-forths. With intuitive prompt-based editing</p>
                <img className='w-12 h-12 md:w-15 md:h-15 flex-shrink-0 cursor-pointer' src="/images/Background.svg" alt="arrow" />
              </div>
              <h2 className='text-2xl md:text-4xl text-white mt-4 md:mt-6'>Seamless Revisions</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full p-2 relative'>
        <div className='w-full h-full relative z-10'>
          <div className='w-full flex items-center justify-center mt-7'>
            <div className='w-full md:w-[50%] p-2 flex gap-2 md:gap-4 items-start'>
              <span className='text-[#D9D9D9] flex-shrink-0 text-sm md:text-base'>2025</span>
              <p className='text-white font-bold text-sm md:text-xl'>Whether you're designing for personal projects, creative teams, or large-scale campaigns, our AI-powered platform is built to bring your ideas to life—quickly, beautifully, and intelligently. And the results? The numbers speak for themselves:</p>
            </div>
          </div>
          <div className='w-full p-2 flex flex-col items-center justify-center'>
            <div className='w-[95%] min-h-[240px] p-2 md:p-4 mt-10 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-white'>
              <section className='flex flex-col'>
                <h3 className='text-4xl md:text-6xl font-bold'>2014</h3>
                <h6 className='text-lg md:text-xl'>Year of establishment</h6>
                <span className='text-gray-700 text-sm md:text-base'>More than 10 years in the field</span>
                <div className='w-full flex items-center mt-2'>
                  <AnimatedTooltip items={people1} />
                  <svg className='-translate-y-2 md:-translate-y-4 w-32 md:w-auto' width="195" height="93" viewBox="0 0 195 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.855469" y1="65.5112" x2="194.833" y2="65.5113" stroke="#D6DBDC" strokeWidth="0.932584" />
                    <line x1="171.982" y1="0.696533" x2="171.982" y2="92.0898" stroke="#D6DBDC" strokeWidth="0.932584" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M157.996 63.1321L171.051 65.9194L165.332 65.9194L157.996 64.2997L157.996 63.1321ZM157.996 68.5943L165.332 67.012L171.052 67.012L157.996 69.7554L157.996 68.5943Z" fill="#D6DBDC" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M185.043 63.1321L171.988 65.9194L177.707 65.9194L185.043 64.2997L185.043 63.1321ZM185.043 68.5943L177.707 67.012L171.987 67.012L185.043 69.7554L185.043 68.5943Z" fill="#D6DBDC" />
                  </svg>
                </div>
              </section>
              <section className='flex flex-col md:translate-y-14'>
                <h3 className='text-4xl md:text-6xl font-bold'>302</h3>
                <h6 className='text-lg md:text-xl'>Projects are launched</h6>
                <span className='text-gray-700 text-sm md:text-base'>A lot of projects are done</span>
                <div className='w-full flex items-center mt-2'>
                  <AnimatedTooltip items={people1} />
                  <svg className='translate-y-2 md:translate-y-4 w-40 md:w-auto' width="240" height="94" viewBox="0 0 240 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.234375" y1="28.646" x2="239.909" y2="28.646" stroke="#D6DBDC" strokeWidth="0.932584" />
                    <line x1="217.061" y1="93.4607" x2="217.061" y2="0.202263" stroke="#D6DBDC" strokeWidth="0.932584" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M204.008 31.9575L217.062 29.1702L211.344 29.1702L204.008 30.7899L204.008 31.9575ZM204.008 26.4953L211.343 28.0776L217.064 28.0776L204.008 25.3342L204.008 26.4953Z" fill="#D6DBDC" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M231.055 31.9575L218 29.1702L223.719 29.1702L231.055 30.7899L231.055 31.9575ZM231.055 26.4953L223.719 28.0776L217.999 28.0776L231.055 25.3342L231.055 26.4953Z" fill="#D6DBDC" />
                  </svg>
                </div>
              </section>
              <section className='flex flex-col'>
                <h3 className='text-4xl md:text-6xl font-bold'>189</h3>
                <h6 className='text-lg md:text-xl'>Clients are satisfied</h6>
                <span className='text-gray-700 text-sm md:text-base'>These people love us</span>
                <div className='w-full flex items-center mt-2'>
                  <AnimatedTooltip items={people1} />
                  <img className='h-16 md:h-20 ml-2 -translate-y-1 md:-translate-y-2' src="/images/decor1.svg" alt="svg" />
                </div>
              </section>
              <section className='flex flex-col md:translate-y-14'>
                <h3 className='text-4xl md:text-6xl font-bold'>12</h3>
                <h6 className='text-lg md:text-xl'>Projects in work</h6>
                <span className='text-gray-700 text-sm md:text-base'>What we do right now</span>
                <div className='w-full flex items-center mt-2'>
                  <AnimatedTooltip items={people1} />
                  <img className='h-16 md:h-20 ml-2 translate-y-1 md:translate-y-2' src="/images/decor2.svg" alt="svg" />
                </div>
              </section>
            </div>
            <div className='w-full p-1 mt-12 md:mt-24 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8'>
              <a
                href="#"
                className="flex w-full md:w-[150px] items-center justify-center gap-x-2 rounded-md bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                Get Started
                <span aria-hidden="true">→</span>
              </a>
              <div className='flex gap-3 items-center'>
                <p className='text-gray-400 text-sm md:text-base'>Slots are avalible</p>
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