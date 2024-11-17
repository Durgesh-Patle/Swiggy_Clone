import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import Navbar from './Components/Header/Navbar'
import OneCard from './Components/BuyNowCard/OneCard'
import Offers from './Components/Offers/Offers'
import Corporate from './Components/SwiggyCorporate/Corporate'
import Help from './Components/Help_Section/Help'
import Carts from './Components/Header/Carts'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/offer' element={<Offers />} />
        <Route path='/corporate' element={<Corporate />} />
        <Route path='/help' element={<Help />} />
        <Route path='/cart' element={<Carts/>}/>


        {/* Dynamic Routing */}
        <Route path='//cart/:id' element={<OneCard />} />
      </Routes>
    </div>
  )
}

export default App
