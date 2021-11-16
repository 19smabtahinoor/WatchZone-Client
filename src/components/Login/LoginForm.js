import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const LoginForm = () => {
    const {LoginUser} = useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        LoginUser(email, password )
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
                <input
                    className="input input-bordered py-3"
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: true })}
                />
                <input
                    className="input input-bordered py-3"
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: true })}
                />
                <button className="btn btn-primary" type="submit">Login</button>

                {/* register link  */}
                <p className="text-center text-sm font-primary font-light text-gray-500">Need an Account ? <Link to="/register" className="text-primary hover:underline font-semibold">Register Now</Link></p>
            </form>
        </div>
    )
}

export default LoginForm
