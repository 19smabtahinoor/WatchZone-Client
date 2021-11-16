import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useHistory } from 'react-router';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';
import useLoading from '../../hooks/useLoading';
import DashboardHeading from '../DashboardHeading';

const ManageOrders = () => {
    const spinner = useLoading();
    const [loading, setLoading] = useState(true)
    const [orders, setOrders] = useState([]);
    const history = useHistory();
    const { user } = useAuth();

    //loading 
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    useEffect(() => {
        axios.get(`https://watch-zone.herokuapp.com/orders`)
            .then(res => setOrders(res?.data))
    }, [user.email])

    //update Status 
    const handleStatus = (e, id) => {
        axios.put(`https://watch-zone.herokuapp.com/orders/${id}`, { OrderStatus: e.target.value })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    swal("Good job!", `Order ${e.target.value} `, "success");
                }
            }).catch((error) => {
                swal("Something went wrong!", `${error.message}`, "error")
            })
    }

    //handle order delete 
    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Are you sure to delete this booking ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`https://watch-zone.herokuapp.com/orders/${id}`)
                        .then(res => {
                            console.log(res)
                            if (res.data) {
                                swal("Poof! Order has deleted", {
                                    icon: "success",
                                });
                                const restBookings = orders.filter((item) => item._id !== id)
                                setOrders(restBookings);
                            }
                        })
                } else {
                    swal("Order hasn't deleted.You booking is stay here!!");
                }
            });
    }

    return (
        <>
            {
                loading ? (
                    spinner
                ) : (
                    <section className="max-w-screen-xl mx-auto px-6 bg-white p-4 box-border rounded-xl shadow-xl mb-12">
                        <DashboardHeading title="Manage All Orders" />


                        {/* orders  */}
                        {
                            orders.length > 0 ? (
                                <>
                                    <div className="flex flex-col space-y-3 py-6">
                                        {
                                            orders.map((item, index) => {
                                                return (
                                                    <div key={item._id} className="border border-gray-200 rounded-lg grid grid-cols-1 lg:grid-cols-7 place-items-center gap-y-4 p-4 box-border">
                                                        <img className="w-16 h-16 object-contain" src={`data:image/png;base64,${item.image}`} alt={item._id} />
                                                        <h1 className="text-gray-800 font-semibold">{item.title.slice(0, 30)}</h1>
                                                        <h2 className="text-gray-900 font-bold">$ {item.price}</h2>
                                                        <p className="text-gray-600 text-sm">{item.name}</p>
                                                        <p className="text-gray-600 text-sm">{item.email}</p>
                                                        {/* <p className="bg-yellow-500 rounded-full px-4 py-1 text-white text-sm">{item.OrderStatus}</p> */}


                                                        {/* status  */}
                                                        <select className="select select-bordered w-full max-w-xs" defaultValue={item.OrderStatus} onChange={(e) => handleStatus(e, item._id)}>
                                                            <option>pending</option>
                                                            <option>shipped</option>
                                                        </select>

                                                        <RiDeleteBin6Line className="text-red-600 text-2xl cursor-pointer" onClick={() => handleDelete(item._id)} />
                                                    </div>
                                                )
                                            })

                                        }
                                    </div>
                                </>
                            ) : (
                                <div className="h-96 space-y-6 flex items-center justify-center flex-col">
                                    <img src="https://travel-solo-fa2d8.web.app/assets/box.png" alt="no order" />
                                    <button className="btn btn-primary w-36" onClick={() => history.push('/products')}>Buy Now</button>
                                </div>
                            )
                        }
                    </section>
                )
            }
        </>
    )
}

export default ManageOrders
