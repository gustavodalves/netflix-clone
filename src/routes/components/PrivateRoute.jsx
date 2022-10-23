import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { Context } from "../../context/AuthContext";

const LOGIN_PATH = '/login'

function PrivateRoute() {
    const { authenticated } = useContext(Context)

    return authenticated ? <Outlet /> : <Navigate to={LOGIN_PATH} />
}

export default PrivateRoute;
