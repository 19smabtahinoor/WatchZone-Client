import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const RegisterForm = () => {
    const { RegisterUser} = useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        const username = data.name;
        const photo = data.image;
        RegisterUser(email, password, username, photo)
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
                <input
                    className="input input-bordered py-3"
                    type="text"
                    placeholder="Your Name"
                    {...register("name", { required: true })}
                />
                <input
                    className="input input-bordered py-3"
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: true })}
                />
                <input
                    className="input input-bordered py-3"
                    type="text"
                    placeholder="Image Link"
                    {...register("image", { required: true })}
                />
                <input
                    className="input input-bordered py-3"
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: true })}
                />
                <button className="btn btn-primary" type="submit">Register</button>

                {/* register link  */}
                <p className="text-center text-sm font-primary font-light text-gray-500">Already have an Account ? <Link to="/login" className="text-primary hover:underline font-semibold">Login Now</Link></p>
            </form>
        </div>
    )
}

export default RegisterForm
