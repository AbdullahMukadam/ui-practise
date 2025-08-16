
import Navbar from './components/Common/Navbar'
import LandingPage from './components/LandingPage'
import CTA from './components/CTA'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className='w-full relative bg-black overflow-hidden max-w-[85rem] mx-auto'>
      <div className='w-full relative flex items-center justify-center'>
        <Navbar />
      </div>
      <LandingPage />
      <CTA />
      <Pricing />
      <FAQ />
    </div>
  )
}

export default App