import Login from "../pages/Login";
import Home from "../pages/Home";

const routes = [
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/',
        component: Home,
        private: true,
    },
    {
        path: '*',
        redirect: '/login',
    }
]

export default routes;
