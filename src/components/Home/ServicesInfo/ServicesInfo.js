import React from 'react';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { ProductContext } from '../../../App';

const ServicesInfo = ({ data }) => {
    const [selectProduct, setSelectProduct] = useContext(ProductContext);

    const handleClick = (id) => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => {
                setSelectProduct(data);
                console.log(data);
            })
    }
    return (
        <>
            <div className="col-md-4 d-flex border rounded" >
                <div>
                    <div >
                        <img style={{ width: '200px', }} className=" rounded-3 img-fluid" src={data.imageURL} alt="" />
                    </div>
                    <div className="text-center">
                        <h4> Name: {data.name}</h4>
                        <h6> Price:${data.price}</h6>
                        <Link to="/book">
                            <button className="btn-info" onClick={() => handleClick(`${data._id}`)}>BUY NOW</button>
                        </Link>
                    </div>
                </div>
            </div>


        </>

    );
};

export default ServicesInfo;