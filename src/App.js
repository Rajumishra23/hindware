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


const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <KitchenAppliancesSection/>
      <FestiveCategorySection/>
      <BannerSection/>
      <KitchenDealsSection/>
      <ComfortBannerSection/>
      <Banner/>
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
