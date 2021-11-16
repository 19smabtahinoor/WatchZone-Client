import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';
import useLoading from '../../hooks/useLoading';
import DashboardHeading from '../DashboardHeading';

const ManageProducts = () => {
    const spinner = useLoading();
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = React.useState([]);
    const history = useHistory();
    const { user } = useAuth();

    useEffect(() => {
        axios.get(`https://watch-zone.herokuapp.com/products`)
            .then(res => setProducts(res?.data))
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
                    axios.delete(`https://watch-zone.herokuapp.com/products/${id}`)
                        .then(res => {
                            console.log(res)
                            if (res.data) {
                                swal("Poof! Order has deleted", {
                                    icon: "success",
                                });
                                const restBookings = products.filter((item) => item._id !== id)
                                setProducts(restBookings);
                            }
                        })
                } else {
                    swal("Order hasn't deleted.You booking is stay here!!");
                }
            });
    }

    return (
        <>
            {/* orders  */}
            {
                loading ? (
                    spinner
                ) : (
                    <>
                        <section className="max-w-screen-xl mx-auto px-6 bg-white p-4 box-border rounded-xl shadow-xl mb-12">
                            <DashboardHeading title="Manage All Orders" />
                            {
                                products.length > 0 ? (
                                    <>
                                        <div className="flex flex-col space-y-3 py-6">
                                            {
                                                products.map((item, index) => {
                                                    return (
                                                        <div key={item._id} className="border border-gray-200 rounded-lg grid grid-cols-1 lg:grid-cols-5 place-items-center gap-y-4 p-4 box-border">
                                                            <img className="w-16 h-16 object-contain" src={`data:image/png;base64,${item.image}`} alt={item._id} />
                                                            <h1 className="text-gray-800 font-semibold">{item.title}</h1>
                                                            <h2 className="text-gray-900 font-bold">$ {item.price}</h2>
                                                            <p className="px-4 py-1 bg-primary rounded-full text-white">{item.status}</p>
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
                                        <button className="btn btn-primary w-36" onClick={() => history.push('/dashboard/add')}>Add New</button>
                                    </div>
                                )
                            }
                        </section>
                    </>
                )
            }

        </>
    )
}

export default ManageProducts
