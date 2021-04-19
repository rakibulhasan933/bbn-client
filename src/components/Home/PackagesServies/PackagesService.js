import React from 'react';
import ServicesInfo from '../ServicesInfo/ServicesInfo';
import { useEffect } from 'react';
import { useContext, useState } from 'react';
import { ProductsContext } from '../../../App';

const PackagesService = () => {
    const [products, setProducts] = useContext(ProductsContext);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <section>
            <div className="text-center pt-5">
                <h1> Mounthly Data Packages</h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row-75 row">
                    {
                        products.map(data => <ServicesInfo data={data} ></ServicesInfo>)
                    }
                </div>
            </div>
        </section>
    );
};

export default PackagesService;