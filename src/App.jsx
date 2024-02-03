import './css/App.css'
import './App.css'
import Navbar from './Components/Navbar'
import BestDeal from './Components/BestDeal'
import DevicesSection from './Components/DevicesSection'
import NewReleased from './Components/NewReleased'
import NewFlavor from './Components/NewFlavor'
import ItemsCarousel from './Components/ItemsCarousel'
import Footer from './Components/Footer'

function App() {

  return (
    <div>
      <Navbar />
      <BestDeal />
      <DevicesSection />
      <NewReleased />
      <NewFlavor />
      <ItemsCarousel />
      <ItemsCarousel />
      <ItemsCarousel />
      <Footer />
    </div>
  )
}

export default App
