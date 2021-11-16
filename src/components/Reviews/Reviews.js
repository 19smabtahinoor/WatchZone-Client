import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Bounce from 'react-reveal/Bounce';
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import HeaderTitle from '../HeaderTitle';
import Review from './Review';
SwiperCore.use([Navigation, Pagination, Autoplay]);

const Reviews = () => {
    const [reviewsData, setReviewsData] = useState([]);

    useEffect(() => {
        axios.get('https://watch-zone.herokuapp.com/reviews')
            .then(res => setReviewsData(res.data))
    }, [])

    return (
        <section className="max-w-screen-xl mx-auto px-6 pb-24 mt-16">
            {/* heading  */}
            <HeaderTitle title="Customer's Reviews" />
            {/* testimonials  */}
            <Swiper
                loop={true}
                className="mySwiper py-6"
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}
                pagination={true} grabCursor={true}
                slidesPerView={1}
                speed={600}
                spaceBetween={20}
            >
                {reviewsData.map(item => (
                    <SwiperSlide key={item._id}>
                        <Bounce left>
                            <Review  {...item} />
                        </Bounce>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Reviews
