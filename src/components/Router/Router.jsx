import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Error from "../../pages/Error/Error";
import Bannar from "../../pages/Home/Bannar";
import Register from "../../pages/Register/Register";
import Login from "../../pages/Login/Login";
import Jobditals from "../../pages/Jobditals/Jobditals";
import PrivetRoute from "../../Authentication/PrivetRoute/PrivetRoute";
import JobApply from "../../pages/JobApply/JobApply";
import MyApplication from "../../pages/MyApplication/MyApplication";
import AddJob from "../../pages/AddJob/AddJob";


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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/detals/:id',
                element: <PrivetRoute><Jobditals></Jobditals></PrivetRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: '/jobapply/:id',
                element: <PrivetRoute><JobApply></JobApply> </PrivetRoute>,
            },
            {
                path: '/myapp',
                element: <PrivetRoute>
                    <MyApplication></MyApplication>
                </PrivetRoute>
            },
            {
                path: '/addjob',
                element: <PrivetRoute><AddJob></AddJob></PrivetRoute>
            }
        ]
    },
]);

export default Router;