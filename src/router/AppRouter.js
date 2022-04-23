import React, {Suspense} from 'react';
import { Switch } from 'react-router-dom';

import { PublicRoute } from './PublicRoute';
import SignPage from "../pages/SignPage";
import {PrivateRoute} from "./PrivateRoute";
import ProfilePage from "../pages/ProfilePage";
import {useSelector} from "react-redux";

const AppRouter = () => {
    const {user} = useSelector((state => state.user))
    return (
        <Suspense fallback={<div>Loading</div>}>
            <Switch>
                <PublicRoute path="/" exact={true} accessToken={user}>
                    <SignPage />
                </PublicRoute>
                <PrivateRoute path="/profile" exact={true} accessToken={user}>
                    <ProfilePage />
                </PrivateRoute>
            </Switch>
        </Suspense>
    );
};

export default AppRouter;
