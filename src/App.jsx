import './App.css'
import AboutUs from './components/AboutUs/AboutUs'
import Banner from './components/Banner/Banner'
import CarrierOptions from './components/CarrierOptions/CareerOptions'
import KeyMetrics from './components/KeyMetrics/KeyMetrics'
import Navbar from './components/Navbar/Navbar'
import OurServices from './components/OurServices/OurServices'

function App() {

  return (
    <>
      <div className='bg-white'>
        <header>
          <Navbar></Navbar>
        </header>

        <main>
          <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
          </div>

          <div>
            <CarrierOptions></CarrierOptions>
          </div>

          <div>
            <KeyMetrics></KeyMetrics>
          </div>

          <div>
            <OurServices></OurServices>
          </div>
        </main>

        <footer>

        </footer>
      </div>
    </>
  )
}

export default App
