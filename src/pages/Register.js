import React from 'react'
import Brand from '../components/Navbar/Brand'
import Navbar from '../components/Navbar/Navbar'
import RegisterForm from '../components/Register/RegisterForm'

const Register = () => {
    return (
        <>
            <Navbar />
            <section className="flex flex-col justify-center items-center h-screen bg-gray-100">
                <div className="rounded-xl p-6 box-border bg-white w-96 mx-auto">
                    <Brand />
                    <RegisterForm />
                </div>
            </section>
        </>
    )
}

export default Register
