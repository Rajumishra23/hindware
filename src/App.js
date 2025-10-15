import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'

import BlogSection from './components/BlogSection'
import SocialMediaSection from './components/SocialMediaSection'
import Footer from './components/footer'
import BannerSection from './components/BannerSection'
import ComfortBannerSection from './components/ComfortBannerSection'
import Banner from './components/Banner'
import SmartKitchenSection from './components/SmartKichenSection'
import KitchenAccessoriesSection from './components/KitchenAccessoriesSection'
import KitchenAppliancesSection from './components/KitchenAppliancesSection'
import DualBannerSection from './components/DualBannerSection'
import KitchenDealsSection from './components/KichenDealsSection'
import FestiveCategorySection from './components/FestiveCategorySection'
import BlendGrindHero from './components/BlindGrindHero'
import ChimneyDealsSection from './components/ChimneyDeals'
import DishwasherBannerSection from './components/DiswasherBanner'
import DishwasherDealsSection from './components/DishwasherDeals'
import JucierBanner from './components/JucierBanner'
import MixerDealsSection from './components/MixerDeals'



const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <KitchenAppliancesSection/>
      <DualBannerSection/>
      <FestiveCategorySection/>
      <BlendGrindHero/>
      <BannerSection/> 
      <KitchenDealsSection/>
      <ComfortBannerSection/>
      <Banner/>
       <ChimneyDealsSection/>
       <DishwasherBannerSection/>
       <DishwasherDealsSection/>
       <JucierBanner/>
      <MixerDealsSection/>  
      <SmartKitchenSection/>
      <KitchenAccessoriesSection/>
      <BlogSection/>
      <SocialMediaSection/>
      <hr></hr>
      <Footer/>
    </div>
  )
}

export default App
