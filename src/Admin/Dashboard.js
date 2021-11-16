import React from 'react';
import { AiFillCreditCard, AiOutlinePlusCircle } from 'react-icons/ai';
import { BsFillPenFill } from 'react-icons/bs';
import { MdOutlineArrowForwardIos, MdOutlineLogout, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { RiAdminFill, RiOrderPlayLine } from 'react-icons/ri';
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Brand from '../components/Navbar/Brand';
import useAuth from "../hooks/useAuth";
import useCheckAdmin from '../hooks/useCheckAdmin';
import MyOrder from '../pages/MyOrder';
import PaymentPage from '../pages/PaymentPage';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageOrders from './ManageOrders/ManageOrders';
import ManageProducts from './ManageProducts/ManageProducts';
import AddNewProducts from './New Products/AddNewProducts';
import WriteReview from './Write Review/WriteReview';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { user, signOutUser } = useAuth();
    const [sidenav, setSidenav] = React.useState(true);
    const {isAdmin} = useCheckAdmin()

    //toggling the side nav
    const handlenav = () => {
        setSidenav(!sidenav);
    }

    // auto hide 
    window.addEventListener('resize', () => {
        if (window.innerWidth < 1480) {
            setSidenav(false)
        } else {
            setSidenav(true)
        }
    })
    return (
        <main className="w-full h-screen grid grid-cols-1 lg:grid-cols-6 xl:grid-cols-6">
            <div className="col-span-1 bg-gray-300">
                <div>
                    {sidenav && (
                        <>
                            <nav className="flex fixed flex-col items-center w-72 bg-white h-screen px-2">
                                <div className="mt-6">
                                    <Brand />
                                </div>
                                <div className="mt-8 flex flex-col items-center justify-center space-y-3">
                                    {/* image  */}
                                    <img
                                        src={user.photoURL}
                                        className="w-28 h-28 rounded-full object-cover mx-auto"
                                        alt={user.displayName}
                                    />
                                    {/* user info  */}
                                    <div>
                                        <h1 className="text-center font-primary text-gray-700">{user.displayName}</h1>
                                        <p className="text-center font-primary text-gray-500 text-sm">{user.email}</p>

                                        {/* role  */}
                                        {isAdmin && (
                                            <div className="flex justify-center pt-4">
                                                <div className="badge badge-primary">Admin</div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="mt-10 mb-4">
                                    <ul className="flex flex-col space-y-3">

                                        {isAdmin === true ? (
                                            <>
                                                {/* manage all orders  */}
                                                <li className="text-gray-500 flex items-center rounded-md py-3 cursor-pointer px-2">
                                                    <Link to={`${url}/manageOrders`}>
                                                        <div className="flex items-center space-x-3">
                                                            <RiOrderPlayLine />
                                                            <span className="ml-2 font-primary">Manage Orders</span>
                                                        </div>
                                                    </Link>
                                                </li>
                                                {/* Manage Products  */}
                                                <li className="text-gray-500 flex items-center rounded-md py-3 cursor-pointer px-2">
                                                    <Link to={`${url}/manageProducts`}>

                                                        <div className="flex items-center space-x-3">
                                                            <MdOutlineProductionQuantityLimits />
                                                            <span className="ml-2 font-primary">Manage Products</span>
                                                        </div>
                                                    </Link>

                                                </li>
                                                {/* Make Admin  */}
                                                <li className="text-gray-500 flex items-center rounded-md py-3 cursor-pointer px-2">
                                                    <Link to={`${url}/makeAdmin`}>
                                                        <div className="flex items-center space-x-3">
                                                            <RiAdminFill />
                                                            <span className="ml-2 font-primary">Make Admin</span>
                                                        </div>
                                                    </Link>
                                                </li>
                                                {/* Add a New Product  */}
                                                <li className="text-gray-500 flex items-center rounded-md py-3 cursor-pointer px-2">
                                                    <Link to={`${url}/add`}>
                                                        <div className="flex items-center space-x-3">
                                                            <AiOutlinePlusCircle />
                                                            <span className="ml-2 font-primary">Add New Product</span>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </>
                                        ):(
                                            <>
                                                    {/* My orders  */}
                                                    <li className="text-gray-500 flex items-center rounded-md py-3 cursor-pointer px-2">
                                                        <Link to={`${url}/myOrders`}>
                                                            <div className="flex items-center space-x-3">
                                                                <RiOrderPlayLine />
                                                                <span className="ml-2 font-primary">My Orders</span>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    {/* Write Review  */}
                                                    <li className="text-gray-500 flex items-center rounded-md py-3 cursor-pointer px-2">
                                                        <Link to={`${url}/reviews`}>
                                                            <div className="flex items-center space-x-3">
                                                                <BsFillPenFill />
                                                                <span className="ml-2 font-primary">Write Review</span>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    {/* Payment  */}
                                                    <li className="text-gray-500 flex items-center rounded-md py-3 cursor-pointer px-2">
                                                        <Link to={`${url}/payment`}>
                                                            <div className="flex items-center space-x-3">
                                                                <AiFillCreditCard />
                                                                <span className="ml-2 font-primary">Payment</span>
                                                            </div>
                                                        </Link>
                                                    </li>
                                            </>
                                        )}                                       
                                        {/* Logout */}
                                        <li className="text-gray-500 flex items-center rounded-md py-3 cursor-pointer px-2" onClick={signOutUser}>
                                            <div className="flex items-center space-x-3">
                                                <MdOutlineLogout />
                                                <span className="ml-2 font-primary">Logout</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </>
                    )}

                    {/* //menu icons  */}
                    <div className=" block fixed bottom-10 left-10 bg-white p-2 rounded-full cursor-pointer shadow-xl border border-primary" onClick={handlenav}>
                        <MdOutlineArrowForwardIos className="text-2xl text-primary" />
                    </div>
                </div>
            </div>
            <div className="col-span-5 pt-24 bg-gray-300 px-6">
                <Switch>
                    <Route exact path={`${path}/`}>
                        {isAdmin === true ? <ManageOrders /> : <MyOrder />}
                    </Route>
                    <Route exact path={`${path}/manageOrders`}>
                        <ManageOrders />
                    </Route>
                    <Route exact path={`${path}/manageProducts`}>
                        <ManageProducts />
                    </Route>
                    <Route exact path={`${path}/add`}>
                        <AddNewProducts />
                    </Route>
                    <Route exact path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </Route>
                    <Route exact path={`${path}/reviews`}>
                        <WriteReview />
                    </Route>
                    <Route exact path={`${path}/myOrders`}>
                        <MyOrder />
                    </Route>
                    <Route exact path={`${path}/payment`}>
                        <PaymentPage />
                    </Route>
                </Switch>
            </div>
        </main>
    )
}

export default Dashboard
