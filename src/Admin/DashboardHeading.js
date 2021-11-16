import React from 'react'

const DashboardHeading = ({title}) => {
    return (
        <div className="border-b border-gray-400 py-3">
            <h1 className="text-gray-700 text-2xl font-primary font-semibold">{title}</h1>
        </div>

    )
}

export default DashboardHeading
