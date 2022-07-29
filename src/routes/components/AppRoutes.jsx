import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import routes from '../routes';
import PrivateRoute from './PrivateRoute';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                { routes.map(route => {
                    const { path, component: Component, redirect, private: isPrivate } = route

                    if(redirect) {
                        return <Route key={path} path={path} element={<Navigate to={redirect} />} />
                    }

                    else if(isPrivate) {
                        return(
                            <Route key={path} element={<PrivateRoute />}>
                                <Route path={path} element={<Component />} />
                            </Route>
                        )
                    }

                    return <Route key={path} path={path} element={<Component />}  />
                }) }
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
