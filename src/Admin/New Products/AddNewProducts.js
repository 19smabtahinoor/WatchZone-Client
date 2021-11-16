import React from 'react'
import DashboardHeading from '../DashboardHeading'
import AddNewForm from './AddNewForm'

const AddNewProducts = () => {
    return (
        <section className="max-w-screen-xl mx-auto px-6 bg-white p-4 box-border rounded-xl shadow-xl">
            <DashboardHeading title="Add A New Product" />

            {/* form  */}
            <AddNewForm />
        </section>
    )
}

export default AddNewProducts
