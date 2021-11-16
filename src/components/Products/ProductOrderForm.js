import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';

const ProductOrderForm = ({ product }) => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const history = useHistory();

    const onSubmit = data => {
        let newOrder = { ...product ,...data};
        newOrder['OrderStatus'] = 'pending';
        //post to backend 
        axios.post('https://watch-zone.herokuapp.com/orders', newOrder)
            .then(res => {
                if (res.data) {
                    swal("Good job!", "Order Added", "success");
                }
                history.push('/dashboard/myOrders')
                reset();
            }).catch((error) => {
                swal("Something went wrong!", `${error.message}`, "error")
            })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-6 py-6">
                {/* name  */}
                <input
                    className="input input-bordered h-14"
                    type="text"
                    defaultValue={user.displayName}
                    placeholder="Name"
                    {...register("name", { required: true })}
                />
                {/* email  */}
                <input
                    className="input input-bordered h-14"
                    type="text"
                    defaultValue={user.email}
                    placeholder="Email"
                    {...register("email", { required: true })}
                />
                {/* phone  */}
                <input
                    className="input input-bordered h-14"
                    type="text"
                    placeholder="☎ Phone Number"
                    {...register("phoneNo", { required: true })}
                />
                {/* address  */}
                <input
                    className="input input-bordered h-14"
                    type="text"
                    placeholder="🚚 Delivery Address"
                    {...register("address", { required: true })}
                />
            </div>
            <div className="flex justify-end">
                <button className="btn btn-primary w-36" type="submit">Place Order</button>
            </div>
        </form>
    )
}

export default ProductOrderForm
