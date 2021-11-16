import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaQuoteLeft } from 'react-icons/fa';
import Rating from 'react-rating';

const Review = (props) => {
    const { name, review, rating, image } = props;
    return (
        <div className="container px-5 py-12 mx-auto">
            <div className=" lg:w-3/4 w-full mx-auto text-center bg-gray-50 p-4 shadow-lg rounded-lg">
                <div className="flex justify-center mb-6">
                    <FaQuoteLeft className="text-7xl text-primary" />
                </div>
                <p className="leading-relaxed poppins text-gray-500">{review}</p>
                <span className="inline-block h-1 w-10 rounded bg-red-400 mt-8 mb-6"></span>

                {/* rating  */}
                <div className="flex items-center justify-center pb-4">
                    <Rating
                        emptySymbol={<AiOutlineStar className="text-gray-600 text-xl" />}
                        fullSymbol={<AiFillStar className="text-yellow-400 text-xl" />}
                        initialRating={`${rating}`}
                        readonly
                    />
                    <span className="text-gray-600">({rating})</span>

                </div>
                {/* person info  */}
                <div className="flex justify-center items-center space-x-3">
                    <img className="w-16 h-16 rounded-full object-cover" src={image} alt={name} />
                    <h2 className="text-gray-900 font-medium poppins tracking-wider text-sm">{name}</h2>
                </div>
            </div>
        </div>
    )
}

export default Review
