import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ accessToken, children, path, exact }) => (
    <Route path={path} exact={exact}>
        {
            accessToken ? (
                children
            ) : (
                <Redirect to='/' />
            )
        }
    </Route>
);
