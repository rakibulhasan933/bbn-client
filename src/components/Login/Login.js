import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { useContext } from 'react/cjs/react.development';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loginUser, SetLoginUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();

    const handleSingIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const credential = result.credential;
                const token = credential.accessToken;
                const user = result.user;
                const { email, displayName } = user;
                SetLoginUser(user);
                history.replace(from);

                // ...
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
                console.log(errorCode, errorMessage, email, credential);

            });
    }

    return (
        <div style={{ textAlign: 'center' }} className="container">
            <button onClick={handleSingIn} className="btn btn-success">Google Sing In</button>
        </div>

    );
};

export default Login;