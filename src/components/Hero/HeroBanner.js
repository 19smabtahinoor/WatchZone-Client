import React from 'react'
import { Link } from 'react-router-dom'

const HeroBanner = () => {
    return (
        <section className="bg-gray-100 font-primary">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row space-y-6 lg:space-x-6">
                    <div className="flex flex-col items-center lg:items-start space-y-6 justify-center height-full leading-relaxed  pt-6">
                        <p className="text-xl text-gray-500">The Stone Series</p>
                        <h1 className="text-4xl text-gray-800 font-semibold text-center lg:text-left lg:text-5xl">Great Leather Collection</h1>
                        <p className="text-center lg:text-left text-sm text-gray-500 w-3/4">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        
                        <Link to="/products">
                            <button className="mt-4 btn rounded-full btn-primary px-6 w-48 py-3">Explore Products</button>
                        </Link>
                    </div>
                    {/* image  */}
                    <div>
                        <img className="lg:w-96 w-72 object-cover mx-auto" src="../../../assets/Hero Banner/watch1.jpg" alt="banner watch" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroBanner
