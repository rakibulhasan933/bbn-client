import React from 'react';
import { useForm } from "react-hook-form";
import { useContext } from 'react/cjs/react.development';
import { UserContext } from '../../../App';


const Review = () => {
    const [loginUser, SetLoginUser] = useContext(UserContext);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data)
        const eventData = {
            name: data.name,
            company: data.company,
            feedback: data.feedback
        };
        console.log(eventData);
        fetch(`http://localhost:5000/addReview`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side response', res))
    };

    return (
        <section style={{ height: '400px' }} className="container">
            <div className=" col-md-6  border border-primary border-3 rounded  bg-dark text-dark">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="p-5">
                        <input className="form-control" defaultValue="name" {...register("name")} />
                        <br />
                        <input className="form-control" defaultValue="company name" {...register("company")} />
                        <br />
                        <input className="form-control" defaultValue="feedback" {...register("feedback")} />
                        <br />
                        <input type="submit" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Review;