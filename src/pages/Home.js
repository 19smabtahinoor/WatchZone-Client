import React from 'react'
import Footer from '../components/Footer/Footer'
import HeroBanner from '../components/Hero/HeroBanner'
import Navbar from '../components/Navbar/Navbar'
import OfferSection from '../components/Offer/OfferSection'
import ProductsSection from '../components/Products/ProductsSection'
import Reviews from '../components/Reviews/Reviews'

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroBanner />
            <ProductsSection />
            <Reviews />
            <OfferSection />
            <Footer />
        </>
    )
}

export default Home
