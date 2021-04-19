import React from 'react';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageService from '../ManageService/ManageService';
import OrderList from '../OrderList/OrderList';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { UserContext } from '../../../App';
import { useContext, useEffect, useState } from 'react';

const Admin = () => {
    const [loginUser, SetLoginUser] = useContext(UserContext);
    const [isDeveloper, setIsDeveloper] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isDeveloper', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loginUser.email })
        })
            .then(res => res.json())
            .then(data => setIsDeveloper(data));
    }, [])

    return (
        <section className="container">
            <h1 style={{ color: 'red' }} className="text-center"> Admin Page</h1>
            {isDeveloper && <div>
                <Router>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <ul className="container">
                                    <li>
                                        <Link to="/orderList">Order List </Link>
                                    </li>
                                    <li>
                                        <Link to="/addPackage">Add Package </Link>
                                    </li>
                                    <li>
                                        <Link to="/addAdmin">Add Admin </Link>
                                    </li>
                                    <li>
                                        <Link to="/manageService">Manage Services</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Switch>
                            <Route path="/orderList">
                                <OrderList></OrderList>
                            </Route>
                            <Route path="/addPackage">
                                <AddProduct></AddProduct>
                            </Route>
                            <Route path="/addAdmin">
                                <MakeAdmin></MakeAdmin>
                            </Route>
                            <Route path="/manageService">
                                <ManageService></ManageService>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>}
        </section>

    );
};

export default Admin;