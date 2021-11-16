import React from 'react';
import Fade from 'react-reveal/Fade';
import useProductFetch from '../../hooks/useProductFetch';
import HeaderTitle from '../HeaderTitle';
import Product from './Product';

const ProductsSection = () => {
    const { products } = useProductFetch();

    return (
        <section className="max-w-screen-xl mx-auto px-6 relative py-6">
            {/* headers  */}
            <HeaderTitle title="Our New Products" />

            {/* products  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-12">
                {
                    products?.slice(0, 6)?.map(item => {
                        return (
                            <Fade key={item._id} left>
                                <Product {...item} />
                            </Fade>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default ProductsSection
