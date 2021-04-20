import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const PackageList = () => {
    const [loginUser, SetLoginUser] = useContext(UserContext);
    console.log(loginUser.email);

    const [oderListSpecific, setOderListSpecific] = useState([])

    useEffect(() => {
        fetch('https://pure-coast-41590.herokuapp.com/oderListSpecific?email=' + loginUser.email)
            .then(res => res.json())
            .then(data => setOderListSpecific(data))
    }, []);
    return (
        <section className="container">
            <div className="col-md-4 text-center">
                <h4> {loginUser.displayName} Booking Page </h4>
                <h6> {loginUser.displayName} have {oderListSpecific.length} Pack</h6>
            </div>
            <div className="col-md-8">
                <table class="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Oder Pack</th>
                            <th scope="col">Pack Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            oderListSpecific.map(pd => <tr>
                                <td>{pd.oderPack} </td>
                                <td>{pd.packPrice}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </section >
    );
};

export default PackageList;