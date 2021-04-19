import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import { useForm } from "react-hook-form";
import { useContext, useEffect } from 'react';
import { ProductContext, UserContext } from '../../../App';


const stripePromise = loadStripe('pk_test_51IhuABD4bG2KrznN6G9qymWo9qM6yo8CzOm8evK9ubKWvT2PG4z1jw37xbdA7vyIguPd9GYeSzJfhcVuIPwtKIoj00eW9mNYDw');

const Book = () => {
    const [loginUser, SetLoginUser] = useContext(UserContext);
    const [selectProduct, setSelectProduct] = useContext(ProductContext);

    const oderData = {
        userName: loginUser.displayName,
        email: loginUser.email,
        oderPack: selectProduct.name,
        packPrice: selectProduct.price
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch(`http://localhost:5000/addOder`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(oderData)
        })
            .then(res => console.log('server side response', res))
    };

    return (
        <section>
            <div className="container">

                <div className="col-md-6">
                    <h1 style={{ color: 'red' }} className="text-center">Payment</h1>
                </div>
                <div className="col-md-6 p-3">
                    <div className="border-3 rounded p-5" style={{ border: '4px solid blue' }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h5>User Name : {loginUser.displayName} </h5>
                            <br />
                            <h5>Email : {loginUser.email} </h5>
                            <br />
                            <h5>Package Name : {selectProduct.name} </h5>
                            <br />
                            <h5>Package Price :$ {selectProduct.price} /Month </h5>
                            <Elements stripe={stripePromise}>
                                <CardElement
                                    className="form-control" options={{
                                        style: {
                                            base: {
                                                fontSize: '16px',
                                                color: '#424770',
                                                '::placeholder': {
                                                    color: '#aab7c4',
                                                },
                                            },
                                            invalid: {
                                                color: '#9e2146',
                                            },
                                        },
                                    }}
                                />
                            </Elements>
                            <br />
                            <input style={{ color: '#9e2146' }} type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Book;