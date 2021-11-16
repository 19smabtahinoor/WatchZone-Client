import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Rating from 'react-rating';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';

const ReviewForm = () => {
    const [rating, setRating] = React.useState();
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        data['rating'] = rating;
        data['image'] = user.photoURL;
        data['email'] = user.email;
        axios.post('https://watch-zone.herokuapp.com/reviews', data)
        .then(res => {
            if (res.data.acknowledged) {
                swal("Good job!", "Review Added", "success");
            }
            reset()
        }).catch((error) => {
            swal("Something went wrong!", `${error.message}`, "error")
        })
        
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col space--6 py-12">
                    <div className="flex flex-col space-y-6">
                        {/* name  */}
                        <input
                            className="input input-bordered h-14"
                            type="text"
                            value={user.displayName}
                            placeholder="Your Name"
                            {...register("name", { required: true })}
                        />
                        {/* write a review  */}
                        <textarea
                            className="textarea h-48 textarea-bordered resize-none"
                            placeholder="Write a review"
                            {...register("review", { required: true })}
                        >
                        </textarea>

                        {/* rating  */}
                        <div className="flex flex-col space-y-3">
                            <p className="text-gray-600 font-primary">Give a rating*</p>
                            <Rating
                                onChange={(rate) => setRating(rate)}
                                emptySymbol={<AiOutlineStar className="text-gray-600 text-3xl"  />}
                                fullSymbol={<AiFillStar className="text-yellow-500 text-3xl" />}
                            />
                        </div>
                        <button className="btn btn-primary w-48" type="submit">Add </button>

                    </div>

                </div>
            </form>
        </div>
    )
}

export default ReviewForm
