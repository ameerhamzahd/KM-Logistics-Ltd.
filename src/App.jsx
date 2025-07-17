import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <div className='bg-white'>
        <header>
          <Navbar></Navbar>
        </header>

        <main>
          <Banner></Banner>
        </main>

        <footer>
          
        </footer>
      </div>
    </>
  )
}

export default App
