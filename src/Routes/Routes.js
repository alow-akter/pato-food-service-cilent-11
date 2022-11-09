import { createBrowserRouter } from "react-router-dom";

import Blog from "../All-Service/Blog/Blog";
import DetailsCurd from "../All-Service/Detailscurd/DetailsCurd";
import Foods from "../All-Service/Foods/Foods";
import Home from "../All-Service/Home/Home";
import Login from "../Authentiction/Login/Login";
import SingUp from "../Authentiction/SingUp/SingUp";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/singUp',
                element: <SingUp></SingUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/foods',
                element: <Foods></Foods>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/detailsCurd/:id',
                element: <DetailsCurd></DetailsCurd>,

            }

        ]
    }
])