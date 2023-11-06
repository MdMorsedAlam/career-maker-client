import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { auth } from "./../Firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
export const MyContext = createContext();


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const googleProvider=new GoogleAuthProvider();



const googleLogin=()=>{
  return signInWithPopup(auth, googleProvider)
}
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currnUser) => {
      setUser(currnUser);
      setLoading(false);
    });
    return () => {
      return unsubcribe();
    };
  }, []);

  const authData = {
    user,
    loading,
    createUser,
    loginUser,
    googleLogin,
    logOut,
  };
  return <MyContext.Provider value={authData}>{children}</MyContext.Provider>;
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
