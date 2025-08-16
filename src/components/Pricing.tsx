
import PricingCards from './PricingCards'

function Pricing() {
  return (
    <div className='text-white mt-20 md:mt-40 h-fit w-full p-2 relative mb-10 md:mb-20 font-modernist'>
      <div className='w-full h-fit relative'>
        <img className='w-full h-[1800px] md:h-[1000px] lg:h-full object-cover' src='/images/image 88.png' alt='HeroImg' />
        <div className='absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black opacity-60'></div>
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-40'></div>
        <div className='absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black opacity-40'></div>
      </div>
      <div className='absolute top-4 md:top-10 lg:top-[0%] inset-0 w-full h-full flex items-start justify-center flex-col p-4 pt-4 md:pt-8'>
        <div className='w-full max-w-4xl mx-auto text-center flex flex-col justify-center items-center gap-4 md:gap-6'>
          <div className='w-full md:w-[85%] lg:w-[55%] max-w-3xl'>
            <h2 className='font-bold text-white text-2xl md:text-3xl lg:text-4xl xl:text-6xl leading-tight'>Choose the Plan That's Right for You</h2>
          </div>
          <div className='w-full md:w-[85%] lg:w-[70%] max-w-5xl'>
            <p className='text-gray-200 text-sm md:text-base lg:text-lg leading-relaxed px-2 md:px-0'>Giving you access to essential features and over 1,000 creative tools. Upgrade to the Pro Plan to unlock powerful AI capabilities, cloud syncing, and a whole new level of creative freedom.</p>
          </div>
        </div>
        <div className='w-full h-fit md:h-[90%] p-2 mt-4 md:mt-0'>
          <PricingCards />
        </div>
      </div>
     
    </div>
  )
}

export default Pricing