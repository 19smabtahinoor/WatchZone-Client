import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import ProductDetails from '../components/Products/ProductDetails';
import ProductOrderForm from '../components/Products/ProductOrderForm';

const PlaceOrder = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    useEffect(() => {
        axios.get(`https://watch-zone.herokuapp.com/products/${id}`)
            .then(res => setProduct(res.data))
    }, [id])

    return (
        <main>
            <Navbar />
            <section className="my-24 max-w-screen-xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                    {/* bookings */}
                    <div className="col-span-2 bg-white rounded-xl shadow-xl p-4 box-border flex flex-col justify-between">
                        <ProductDetails {...product} />
                    </div>
                    {/* details  */}
                    <div className="col-span-2 bg-white  rounded-xl shadow-xl p-4 box-border">
                        {/* heading  */}
                        <div className="flex flex-col space-y-2">
                            <h1 className="font-primary text-2xl text-gray-700 font-semibold text-center">Order Details</h1>
                            <div className="h-1 w-36 mx-auto bg-primary rounded-full"></div>
                        </div>
                        {/* form  */}
                        <ProductOrderForm product={product} />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default PlaceOrder
