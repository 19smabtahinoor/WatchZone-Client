import React from 'react';
import Fade from 'react-reveal/Fade';

const HeaderTitle = ({title}) => {
    return (
        <Fade left>
            <div className="flex flex-col space-y-3 items-center justify-center py-6">
                <h1 className="text-2xl font-primary text-gray-700">{title}</h1>
                <div className="w-36 h-1 bg-primary"></div>
            </div>
        </Fade>
    )
}

export default HeaderTitle
