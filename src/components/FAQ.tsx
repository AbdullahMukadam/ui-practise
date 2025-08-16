
import FAQComponent from './faqComp'
import Footer from './Common/Footer'

function FAQ() {
  return (
    <div className='w-full mt-32 relative font-modernist bg-faq-gradient'>
      <div className='absolute top-10 w-full flex'>
        <svg className='translate-x-[600px] translate-y-52' width="910" height="1117" viewBox="0 0 910 1317" fill="none" xmlns="http://www.w3.org/2000/svg" >
          <line x1="16.0854" y1="17.7647" x2="1439.42" y2="1299.34" stroke="url(#paint0_linear_1_391)" stroke-width="46.0352" />
          <defs>
            <linearGradient id="paint0_linear_1_391" x1="712.349" y1="675.655" x2="784.314" y2="594.124" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" stop-opacity="0.06" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <svg width="910" height="1117" viewBox="0 0 910 1317" fill="none" xmlns="http://www.w3.org/2000/svg" >
          <line x1="16.0854" y1="17.7647" x2="1439.42" y2="1299.34" stroke="url(#paint0_linear_1_391)" stroke-width="46.0352" />
          <defs>
            <linearGradient id="paint0_linear_1_391" x1="712.349" y1="675.655" x2="784.314" y2="594.124" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" stop-opacity="0.06" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className='w-full absolute flex flex-col gap-12 z-50'>
        <svg width="100" height="400" viewBox="0 0 121 424" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="108.542" y="11.7235" width="399.772" height="202.817" rx="101.409" transform="rotate(90 108.542 11.7235)" stroke="#FF9777" stroke-width="23.4471" />
        </svg>

        <svg width="200" height="200" viewBox="0 0 224 227" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="-401.276" y="11.7235" width="613.141" height="202.817" rx="101.409" stroke="#F6F6F6" stroke-width="23.4471" />
        </svg>

        <div className='absolute right-0'>
          <svg width="98" height="446" viewBox="0 0 98 446" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="11.7235" y="11.7235" width="422.047" height="422.047" rx="211.024" stroke="#FF541F" stroke-width="23.4471" />
          </svg>
        </div>


      </div>
      <div className='w-full flex items-center justify-center z-50'>
        <FAQComponent />
      </div>
      <div className='w-full mt-2 lg:mt-16 flex items-center justify-center'>
        <div className=" w-[90%] lg:w-[60%] relative overflow-hidden h-fit p-10 rounded-2xl bg-cta-gradient border-[1px] border-gray-700">
          <div className='absolute -top-14 left-0' >
          <svg width="800" height="375" viewBox="0 0 1120 375" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="-310" width="1120" height="850" rx="10" fill="url(#paint0_radial_1_662)" fill-opacity="0.4" />
            <defs>
              <radialGradient id="paint0_radial_1_662" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(560 -131.2) scale(560 510)">
                <stop offset="0.0734973" stop-color="white" />
                <stop offset="0.242278" stop-color="#FF541F" stop-opacity="0.8" />
                <stop offset="0.36" stop-color="#F7AF99" />
                <stop offset="0.499878" stop-color="#FF541F" />
                <stop offset="1" stop-opacity="0" />
              </radialGradient>
            </defs>
          </svg>
          </div>

          <div className="mx-auto w-[90%] md:max-w-7xl px-1 md:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center z-50">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Ready to Design Smarter?
              </h2>
              <p className="mt-6 text-lg leading-8 text-white">
                Whether you’re a freelancer, a team, or a growing agency—our tools
                adapt to your workflow. Design faster. Deliver better.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 cursor-pointer">
                <a
                  href="#"
                  className="flex items-center gap-x-2 rounded-md bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-orange-600 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                >
                  Get Started
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full'>
       <Footer />
      </div>
    </div>
  )
}

export default FAQ