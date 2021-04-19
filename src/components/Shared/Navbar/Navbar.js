import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [loginUser, SetLoginUser] = useContext(UserContext);
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/"><h4 style={{ color: 'green' }} >{loginUser.displayName} </h4></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                            <Link class="nav-link active" to="/home">Home</Link>
                            <Link class="nav-link active" to="/dashboard">DashBoard</Link>
                            <Link class="nav-link active" to="/admin">Admin</Link>
                            <Link class="nav-link active" to="/blog">Blog</Link>
                            <Link class="nav-link active" to="/about">About</Link>
                            <Link class="nav-link active" to="/login">Login</Link>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;