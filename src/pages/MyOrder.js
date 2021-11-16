import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import DashboardHeading from '../Admin/DashboardHeading';
import useAuth from '../hooks/useAuth';
import useLoading from '../hooks/useLoading';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true)
    const history = useHistory();
    const { user } = useAuth();
    const spinner = useLoading();


    useEffect(() => {
        axios.get(`https://watch-zone.herokuapp.com/orders?email=${user.email}`)
            .then(res => setOrders(res?.data))
    }, [user.email])

    //loading 
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

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
            {loading ? (
                spinner
            ) : (
                <section className="max-w-screen-xl mx-auto px-6 bg-white p-4 box-border rounded-xl shadow-xl mb-12">
                    <DashboardHeading title="My Orders" />

                    {/* orders  */}
                    {
                        orders.length > 0 ? (
                            <>
                                {
                                    orders.map((item) => {
                                        return (
                                            <div key={item._id} className="grid grid-cols-1 lg:grid-cols-4 gap-10 bg-white rounded-lg border border-gray-200 p-6 box-border my-3">
                                                {/* {/_ image _/} */}
                                                <div className="col-span-1">
                                                    <img className="w-full h-48 rounded-lg object-contain" src={`data:image/png;base64,${item.image}`} alt={item.title} />
                                                </div>
                                                {/* {/_ details _/} */}
                                                <div className="col-span-2">
                                                    <h1 className="text-gray-700 text-lg font-primary">{item.title}</h1>
                                                    <p className="text-gray-500 text-sm">{item.description.slice(0, 200)}</p>
                                                    {/* {/_ others info _/} */}
                                                    <div className="flex flex-col lg:flex-row items-start lg:space-x-12 py-4 space-y-4 lg:items-center">
                                                        {/* {/_ status _/} */}
                                                        <div className="flex items-center space-x-3">
                                                            <div className="flex flex-col">
                                                                <span className={`${item.OrderStatus === "pending" ? "bg-yellow-500" : "bg-green-600"} text-white px-4 py-1 rounded-full font-primary text-sm`}>{item.OrderStatus}</span>
                                                            </div>
                                                        </div>
                                                        {/* {/_ price _/} */}
                                                        <div>
                                                            <h1 className="font-primary font-semibold text-gray-900 text-2xl">${item.price}</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-1 flex items-center lg:justify-end">
                                                    <button className="btn btn-primary px-4 w-36 mr-auto lg:ml-auto" onClick={() => handleDelete(item._id)}>Cancel</button>
                                                </div>
                                            </div>
                                        )
                                    })

                                }
                            </>
                        ) : (
                            <div className="h-96 space-y-6 flex items-center justify-center flex-col">
                                <img src="https://travel-solo-fa2d8.web.app/assets/box.png" alt="no order" />
                                <button className="btn btn-primary w-36" onClick={() => history.push('/products')}>Buy Now</button>
                            </div>
                        )
                    }
                </section>
            )}
        </>
    )
}

export default MyOrder
