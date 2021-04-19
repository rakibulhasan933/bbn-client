import React from 'react';
import { useEffect, useState } from 'react';

const OrderList = () => {
    const [oderList, setOderList] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/oderList')
            .then(res => res.json())
            .then(data => setOderList(data))
    }, [])
    return (
        <div className="container">
            <table class="table table-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col">User Name</th>
                        <th scope="col">User Email</th>
                        <th scope="col">Oder Pack</th>
                        <th scope="col">Pack Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        oderList.map(list => <tr>
                            <td>{list.userName}</td>
                            <td>{list.email}</td>
                            <td>{list.oderPack} </td>
                            <td>{list.packPrice}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default OrderList;