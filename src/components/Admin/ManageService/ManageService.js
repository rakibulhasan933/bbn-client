import React from 'react';
import { useContext } from 'react';
import { ProductsContext } from '../../../App';


const ManageService = () => {
    const [products, setProducts] = useContext(ProductsContext);
    console.log(products);
    const deletedProduct = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('deleted');
            })
    }

    return (
        <section>
            <div className="col-md-4">
                <h1 style={{ textAlign: 'center', color: 'green' }}>ManageProducts</h1>
            </div>
            <div className="col-md-8">
                <table class="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Pack Name</th>
                            <th scope="col">Pack Price</th>
                            <th scope="col">Pack Deleted Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(pd => <tr>
                                <td>{pd.name}</td>
                                <td>{pd.price}</td>
                                <td> <button style={{ backgroundColor: 'red' }} onClick={() => deletedProduct(pd._id)}>Deleted</button> </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ManageService;