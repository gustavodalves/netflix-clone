/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import Login from "../pages/Login";
import Home from "../pages/Home";
import SelectProfile from "../pages/SelectProfile";

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
      path: '/profiles',
      component: SelectProfile,
      private: true,
    },
    {
        path: '*',
        redirect: '/login',
    }
]

export default routes;
