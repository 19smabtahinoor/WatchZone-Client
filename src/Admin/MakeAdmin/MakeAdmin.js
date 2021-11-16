import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import DashboardHeading from '../DashboardHeading';

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        //post to backend 
        axios.put('https://watch-zone.herokuapp.com/users', data)
            .then(res => {
                console.log(res)
                if (res.data) {
                    swal("Good job!", "Admin Added", "success");
                }
                reset()
            }).catch((error) => {
                swal("Something went wrong!", `${error.message}`, "error")
            })
    };
    return (
        <section className="max-w-screen-xl mx-auto px-6 bg-white p-4 box-border rounded-xl shadow-xl">
            <DashboardHeading title="Make Admin" />
            {/* form  */}

            <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col space-y-6 py-6">
                        <input
                            className="input input-bordered h-14"
                            type="text"
                            placeholder="Write Email"
                            {...register("email", { required: true })}
                        />
                        <button className="btn btn-primary w-48" type="submit">Make Admin</button>
                    </div>
            </form>
        </section>
    )
}

export default MakeAdmin
