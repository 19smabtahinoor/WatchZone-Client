import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import Fade from 'react-reveal/Fade';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    const { user, signOutUser } = useAuth();
    const [mobileNav, setMobileNav] = useState(false)
    const menu = [
        { id: 1, text: 'Dashboard', to: '/dashboard' },
        { id: 2, text: 'Explore', to: '/products' },
    ]

    //handle click 
    const handleClick = () => {
        setMobileNav(!mobileNav)
    }
    return (
        <header className="bg-gray-100">
            {/* desktop nav  */}
            <nav className="max-w-screen-xl mx-auto flex items-center px-12  py-3 font-primary ">
                {/* brand  */}
                <div className=" flex-grow">
                    <Link to="/" className="flex items-center space-x-2">
                        <img src="../../../assets/logo.png" alt="logo" className="object-contain h-12" />
                        <h1 className="font-logo text-gray-800 font-bold text-3xl">WatchZone</h1>
                    </Link>
                </div>
                {/* menu s */}

                {user.email ? (
                    <>
                        <div className="hidden md:flex lg:flex space-x-3">
                            <ul className="flex items-center space-x-4">
                                {menu.map(item => (
                                    <li key={item.id}>
                                        <NavLink to={item.to} className="text-gray-600 text-lg">{item.text}</NavLink>
                                    </li>
                                ))}
                            </ul>

                            {/* user info  */}
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className=" rounded-full w-14 h-14 ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img className="w-8" src={user.photoURL} alt={user.displayName} />
                                    </div>
                                </div>
                                <h1>{user.displayName}</h1>
                            </div>

                            <button className="btn btn-primary w-24" onClick={signOutUser}>Logout</button>
                        </div>
                    </>
                ) : (
                    <>
                        <Link to="/login">
                            <button className="btn btn-primary w-24">Login</button>
                        </Link>
                    </>
                )}



                {/* menu icon  */}
                <div className="block md:hidden lg:hidden">
                    <HiMenuAlt3 className="w-10 h-10 ring-blue-300 text-gray-700 border border-gray-400 focus:ring-4 cursor-pointer rounded-lg p-2 transform transition duration-200 hover:scale-110" onClick={handleClick} />
                </div>
            </nav>

            {/* mobile nav  */}
            {mobileNav && (
                <Fade>
                    <nav className="bg-white shadow-lg mx-6 mt-2 rounded-lg border border-gray-300 py-4 block md:hidden lg:hidden">
                        {user.email ? (
                            <>
                                <div className="md:flex lg:flex space-x-3 space-y-4">
                                    <ul>
                                        {menu.map(item => (
                                            <NavLink key={item.id} to={item.to} className="text-gray-600 text-lg">
                                                <li className="py-2 px-3 w-full hover:bg-gray-200 transition duration-300 cursor-pointer flex justify-center">
                                                    {item.text}
                                                </li>
                                            </NavLink>
                                        ))}
                                    </ul>

                                    {/* user info  */}
                                    <div className="flex justify-center lg:justify-start items-center space-x-3">
                                        <div className="avatar">
                                            <div className=" rounded-full w-14 h-14 ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img className="w-8" src={user.photoURL} alt={user.displayName} />
                                            </div>
                                        </div>
                                        <h1>{user.displayName}</h1>
                                    </div>
                                    
                                    {/* button  */}
                                    <div className="flex justify-center mt-6">
                                        <button className="btn btn-primary py-3 w-36 mx-auto" onClick={signOutUser}>Logout</button>

                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <Link to="/login">
                                    <button className="btn btn-primary w-24">Login</button>
                                </Link>
                            </>
                        )}
                        
                    </nav>
                </Fade>
            )}
        </header>
    )
}

export default Navbar