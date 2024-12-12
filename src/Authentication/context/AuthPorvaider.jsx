import { useEffect, useState } from "react";
import Authcontext from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";

const AuthPorvaider = ({ children }) => {


    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const creatUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const singIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const provider = new GoogleAuthProvider();
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const singOut = () => {
        setLoading(true)
        return signOut(auth)
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
        setLoading,
        creatUser,
        singIn,
        singOut,
        googleLogin
    }

    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthPorvaider;