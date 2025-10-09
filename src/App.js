import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import BathroomFeature from './components/BathroomFeature'
import KitchenFeature from './components/KichenFeature'
import ProductImage from './components/ProductImage'
import NewArrival from './components/NewArrival'
import SmartProductSection from './components/SmartproductSection'
import SustainableSection from './components/SustainableSection'
import StoreLocatorSection from './components/StoreLocatorSection'
import BlogSection from './components/BlogSection'
import SocialMediaSection from './components/SocialMediaSection'
import Footer from './components/footer'

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <BathroomFeature />
      <KitchenFeature/>
      <ProductImage/>
      <NewArrival/>
      <SmartProductSection/>
      <SustainableSection/>
      <StoreLocatorSection/>
      <BlogSection/>
      <SocialMediaSection/>
      <hr></hr>
      <Footer/>
    </div>
  )
}

export default App
