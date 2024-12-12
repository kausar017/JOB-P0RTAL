import { useContext } from "react";
import Authcontext from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../pages/Loader/Loader";

const PrivetRoute = ({ children }) => {

    const { user, loading } = useContext(Authcontext);
    console.log(user, loading);

    const location = useLocation()

    if (loading) {
        return <Loader></Loader>
    }

    if (user) {
        return children;
    }

    return <Navigate to={'/login'} state={location}></Navigate>
};

export default PrivetRoute;