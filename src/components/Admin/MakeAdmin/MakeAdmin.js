import React from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        const adminData = {
            email: data.email,
        };
        console.log(adminData);
        fetch(`https://pure-coast-41590.herokuapp.com/addAdmin`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(adminData)
        })
            .then(res => console.log('server side response', res))
    };


    return (
        <section style={{ height: '400px' }} className="container">
            <div className="container  col-md-6  border border-primary border-3 rounded  bg-dark text-dark">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="p-3">
                        <input className="form-control" defaultValue="Enter Your Email" {...register("email")} />
                        <br />
                        <input type="submit" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default MakeAdmin;