import { createContext } from "react";
import PropTypes from "prop-types";
import { auth } from "./../Firebase/firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
export const MyContext = createContext();

const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }

  const authData = {
    createUser,loginUser
  };
  return <MyContext.Provider value={authData}>{children}</MyContext.Provider>;
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
