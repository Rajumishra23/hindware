import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import KitchenFeature from './components/KichenFeature'


import BlogSection from './components/BlogSection'
import SocialMediaSection from './components/SocialMediaSection'
import Footer from './components/footer'
import CategoryList from './components/CategoryList'
import BannerSection from './components/BannerSection'
import ComfortBannerSection from './components/ComfortBannerSection'
import Banner from './components/Banner'
import SmartKitchenSection from './components/SmartKichenSection'
import KitchenAccessoriesSection from './components/KitchenAccessoriesSection'


const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <KitchenFeature/>
      <CategoryList/>
      <BannerSection/>
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
