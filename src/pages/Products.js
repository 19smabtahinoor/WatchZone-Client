import React from 'react';
import Fade from 'react-reveal/Fade';
import HeaderTitle from '../components/HeaderTitle';
import Navbar from '../components/Navbar/Navbar';
import Product from '../components/Products/Product';
import useProductFetch from '../hooks/useProductFetch';

const Products = () => {
    const {products} = useProductFetch();
    return (
        <>
        <Navbar />
            <section className="max-w-screen-xl mx-auto px-6 relative py-6">
                {/* heading  */}
                <HeaderTitle title="All Products" />

                {/* products  */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-12">
                    {
                        products?.map(item => {
                            return (
                                <Fade key={item._id} left>
                                    <Product {...item} />
                                </Fade>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Products
