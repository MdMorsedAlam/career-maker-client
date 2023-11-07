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
import axios from "axios";
export const MyContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
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
      const uemail = currnUser?.email || user?.email;
      setUser(currnUser);
      setLoading(false);
      if (currnUser) {
        axios
          .post(
            "http://localhost:3737/api/v1/jwt",
            { email: uemail },
            { withCredentials: true }
          )
          .then()
          .catch();
      }else{
        axios
          .post(
            "http://localhost:3737/api/v1/logout",
            { withCredentials: true }
          )
          .then(res=>console.log(res.data));
      }
    });
    return () => {
      return unsubcribe();
    };
  }, [user]);

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
