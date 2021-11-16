import React from 'react'
import { Link } from 'react-router-dom'

const OfferSection = () => {
    return (
        <section className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-10 pb-12">
            {/* left side  */}
            <div className="col-span-2 flex flex-col space-y-2 justify-center font-primary">
                <p className="text-primary">Special Offer</p>
                <h2 className="text-gray-500 font-semibold text-2xl">SUCCULENT GARDEN</h2>
                <h1 className="text-gray-900 font-bold text-6xl">GIFT BOXES</h1>
                <p className="text-gray-500 text-sm">From planter materials to style options, discover which planter is best for your space.</p>
                <Link to="/products">
                    <button className="btn btn-primary rounded-full w-48 mt-6">Explore the shop</button>
                </Link>
            </div>

            {/* right side  */}
            <div className="col-span-2">
                <img className="rounded-lg transform transition duration-500 hover:scale-105" src="https://cdn.shopify.com/s/files/1/0039/3740/2989/files/694x424_e23c122a-8d28-40ec-ba10-87e28f07c2ba.jpg?v=1559383318" alt="offer" />
            </div>
        </section>
    )
}

export default OfferSection
