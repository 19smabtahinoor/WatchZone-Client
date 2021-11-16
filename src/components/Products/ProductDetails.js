import React from 'react'

const ProductDetails = (props) => {
    const { title, description, image, price, status } = props

    return (
        <div className="py-4 box-border overflow-hidden relative flex flex-col space-y-3">
            <div>
                {/* country badge  */}
                <div className="absolute top-10 text-sm left-0 z-50 bg-yellow-400 font-primary px-4 py-1 rounded-lg">{status}</div>
                {/* image  */}
                <div className="overflow-hidden rounded-xl h-96 w-full">
                    <img className="transform hover:scale-125 transition duration-700 w-full h-full object-contain" src={`data:image/png;base64,${image}`} alt={title} />
                </div>
            </div>

            <div className="flex flex-col flex-grow">
                {/* title and description */}
                <div className="flex flex-col space-y-1 my-4">
                    <h2 className="text-gray-700 font-primary text-base">{title}</h2>
                    <p className="text-sm text-gray-500">{description}</p>
                </div>

                {/* card footer  */}
                <div className="flex items-center justify-between pt-3">
                    <h1 className="font-primary font-semibold text-gray-900 text-2xl">${price}</h1>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
