import React from 'react';
import Book from '../Book/Book';
import PackageList from '../PackageList/PackageList';
import Review from '../Review/Review';
import './Dashboard.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



const DashBoard = () => {
    return (
        <Router>
            <div className="container">
                <h1 style={{ textAlign: 'center', color: 'green' }}> Dashboard</h1>
                <div>
                    <ul className=" container">
                        <li>
                            <Link to="/book"> Book</Link>
                        </li>
                        <li>
                            <Link to="/packageList">Package List</Link>
                        </li>
                        <li>
                            <Link to="/review"> Review</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Switch>
                <Route path="/book">
                    <Book></Book>
                </Route>
                <Route path="/packageList">
                    <PackageList></PackageList>
                </Route>
                <Route path="/review">
                    <Review></Review>
                </Route>
                <Route path="/">
                    <PackageList></PackageList>
                </Route>
            </Switch>
        </Router >
    );
};

export default DashBoard;