import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import { Wrapper } from '../style-components/styled-components';

export const PublicRoute = ({accessToken,children, path, exact }) => {
    return (
        <Route path={path} exact={exact}>
            {
                !accessToken ? (
                    <Wrapper>
                        {children}
                    </Wrapper>
                ) : (
                    <Redirect to='/profile' />
                )
            }
        </Route>
    )
};
