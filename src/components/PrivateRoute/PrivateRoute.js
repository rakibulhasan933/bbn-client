import React from 'react';
import { Redirect, Route } from 'react-router';
import { useContext } from 'react/cjs/react.development';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loginUser, SetLoginUser] = useContext(UserContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loginUser.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;