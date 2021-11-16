import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { _id, title, description, image, price, status } = props;
    return (
        <div className="bg-gray-50 shadow-xl rounded-xl p-4 box-border overflow-hidden relative flex flex-col justify-between h-full">
            {/* country badge  */}
            <div className="absolute top-10 text-sm left-0 z-50 bg-yellow-400 font-primary px-4 py-1 rounded-lg">{status}</div>
            {/* image  */}
            <div className="overflow-hidden rounded-xl h-52">
                <img className="transform hover:scale-125 transition duration-700 w-full h-full object-contain" src={`data:image/png;base64,${image}`} alt={title} />
            </div>

            <div className="flex flex-col flex-grow">
                {/* title and description */}
                <div className="flex flex-col space-y-1 my-4">
                    <h2 className="text-gray-700 font-primary text-lg">{title.slice(0, 100)}</h2>
                    <p className="text-gray-500 text-sm">{description.slice(0, 250)}</p>

                </div>
            </div>

            {/* card footer  */}
            <div className="flex items-center justify-between pt-3">
                <h1 className="font-primary font-semibold text-gray-900 text-2xl">${price}</h1>
                <Link to={`/placeOrder/${_id}`}>
                    <button className="btn btn-primary px-6">Buy Now</button>
                </Link>
            </div>
        </div>
    )
}

export default Product
