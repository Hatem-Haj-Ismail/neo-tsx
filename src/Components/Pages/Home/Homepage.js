import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import MarketplaceCard from './MarketplaceCard/MarketplaceCard'
import Freeintegration from './Freeintegration/Freeintegration'
import Richadminpanel  from './Richadminpanel/Richadminpanel'
import { Howitworks } from './Howitworks/Howitworks'
import Varietyoffeatures from './Varietyoffeatures/Varietyoffeatures'
import Testimonials from './Testimonials/Testimonials'
import FloatingContainer from "../../Uitily/Footer/FloatingContainer";

const Homepage = () => {
  return (
    <div className='homepage'>
      <HeroSection/>
      <MarketplaceCard/>
      <Freeintegration/>
      <Richadminpanel/>
      <Howitworks/>
      <Varietyoffeatures/>
      <Testimonials/>
      <FloatingContainer />
    </div>
  )
}

export default Homepage
