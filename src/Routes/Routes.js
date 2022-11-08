import { createBrowserRouter } from "react-router-dom";
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
            }
        ]
    }
])