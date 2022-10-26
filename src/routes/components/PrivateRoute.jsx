import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { Context } from "../../context/AuthContext";

const LOGIN_PATH = '/login'

function PrivateRoute() {
    const { isAuthenticated } = useContext(Context)

    return isAuthenticated ? <Outlet /> : <Navigate to={LOGIN_PATH} />
}

export default PrivateRoute;
