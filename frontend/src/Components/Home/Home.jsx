import React from 'react'
import Choice_Food from '../Food_Mid/Choice_Food'
import Restorent_Chaine from '../Food_Mid/Restorent_Chaine'
import Food_Delevary from '../Food_Mid/Food_Delevary'
import Footer from '../Footer/Footer'
import Cuisines from '../Cuisines/Cuisines'

const Home = () => {
  return (
    <div className='mt-20'>
        <Choice_Food/> 
        <Restorent_Chaine/>
        <Food_Delevary/>
        <Cuisines/>
        <Footer/>
    </div>
  )
}

export default Home
