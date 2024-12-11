import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Error from "../../pages/Error/Error";
import Bannar from "../../pages/Home/Bannar";
import Register from "../../pages/Register/Register";
import Login from "../../pages/Login/Login";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Bannar></Bannar>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: 'login',
                element: <Login></Login>
            }
        ]
    },
]);

export default Router;