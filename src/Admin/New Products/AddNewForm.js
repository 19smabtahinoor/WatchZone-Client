import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';

const AddNewForm = () => {
    const [image, setImage] = React.useState(null);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('price', data.price);
        formData.append('status', data.status);
        formData.append('image', image);        //post to backend
        axios.post('https://watch-zone.herokuapp.com/products', formData)
            .then(res => {
                if (res.data.insertedId) {
                    swal("Good job!", "Product Added", "success");
                }
                reset()
            }).catch((error) => {
                swal("Something went wrong!", `${error.message}`, "error")
            })
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-12">
                    {/* left side  */}
                    <div className="flex flex-col space-y-6">
                        <input
                            className="input input-bordered h-14"
                            type="text"
                            placeholder="Product Title"
                            {...register("title", { required: true })}
                        />
                        <textarea
                            className="textarea h-56 textarea-bordered resize-none"
                            placeholder="Product Description"
                            {...register("description", { required: true })}
                        >

                        </textarea>
                    </div>

                    {/* right side  */}
                    <div className="flex flex-col space-y-6">

                        <label htmlFor="image"className="text-gray-500">Select Product Image*</label>
                        <input
                            id="image"
                            accept="image/*"
                            type="file"
                            className=""
                            onChange={(e) => setImage(e.target.files[0])}
                        />

                        <input
                            className="input input-bordered h-14"
                            type="number"
                            placeholder="Price"
                            {...register("price", { required: true })}
                        />
                        <select className="select select-bordered w-full h-14"
                            {...register("status", { required: true })}>
                            <option>In Stock</option>
                            <option>Stock Out</option>
                        </select>
                        <button className="btn btn-primary" type="submit">Add </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddNewForm



