import React from 'react'
import LoginForm from '../components/Login/LoginForm'
import Brand from '../components/Navbar/Brand'
import Navbar from '../components/Navbar/Navbar'

const Login = () => {
    return (
        <>
        <Navbar />
            <section className="flex flex-col justify-center items-center h-screen bg-gray-100">
                <div className="rounded-xl p-6 box-border bg-white w-96 mx-auto">
                    <Brand />
                    <LoginForm />
                </div>
            </section>
        </>
    )
}

export default Login
