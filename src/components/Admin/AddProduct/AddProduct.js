import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddProduct = () => {
    const [imageURL, setImageUrl] = useState(null);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const eventData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL
        };
        console.log(eventData);
        fetch(`https://pure-coast-41590.herokuapp.com/addProduct`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side response', res))
    };
    const handleImageUpLoad = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '653e47c04775bf54b071a6f09142d5a0');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <section style={{ height: '400px' }} className="container">
            <div className=" col-md-6  border border-primary border-3 rounded  bg-dark text-dark">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="p-5">
                        <input className="form-control" defaultValue="name" {...register("name")} />
                        <br />
                        <input type='number' className="form-control" defaultValue="price" {...register("price")} />
                        <br />
                        <input type="file" className="form-control" onChange={handleImageUpLoad} />
                        <br />
                        <input type="submit" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddProduct;