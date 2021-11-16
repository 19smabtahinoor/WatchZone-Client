import React from 'react'
import { Link } from 'react-router-dom'

const Brand = () => {
    return (
        <div className="flex justify-center mb-6">
            <Link to="/" className="cursor-pointer flex items-center space-x-2">
                <img className="object-contain h-12" src="../../../assets/logo.png" alt="logo" />
                <h1 className="font-logo text-gray-800 font-bold text-3xl">WatchZone</h1>
            </Link>
        </div>

    )
}

export default Brand
