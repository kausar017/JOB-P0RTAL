import { useEffect, useState } from "react";
import Authcontext from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, updateCurrentUser } from "firebase/auth";
import auth from "../firebase/firebase.init";

const AuthPorvaider = ({ children }) => {


    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const creatUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
            setUser(currentuser)
            setLoading(false)
            console.log(currentuser);

        })
        return () => {
            unsubscribe;
        }
    }, [])

    const authInfo = {
        user,
        loading,
        creatUser
    }

    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthPorvaider;