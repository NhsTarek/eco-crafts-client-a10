import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

// import { signInWithEmailAndPassword } from "firebase/auth/cordova";

export const AuthContext = createContext(null);


// social auth providers

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();






const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
    
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // update user
    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: image, 
        })
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }



    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    // google login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // githubLogin
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }


    useEffect((() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('user in the auth state changed', currentUser);
            setUser(currentUser)
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }), [])

    const authInfo = {
        user,
        loading,
        createUser,
        updateUserProfile,
        signIn,
        googleLogin,
        githubLogin,
        logOut,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;