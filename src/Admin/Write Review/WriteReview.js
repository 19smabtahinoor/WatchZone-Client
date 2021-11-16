import React from 'react'
import DashboardHeading from '../DashboardHeading'
import ReviewForm from './ReviewForm'

const WriteReview = () => {
    return (
        <section className="max-w-screen-xl mx-auto px-6 bg-white p-4 box-border rounded-xl shadow-xl">
            <DashboardHeading title="Add A Review" />
            {/* form  */}
            <ReviewForm />
        </section>
    )
}

export default WriteReview
