import React, { useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";
import { onAuthStateChanged, updateEmail, updatePassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
const AuthContext = React.createContext(null);
export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  async function signup(email, password) {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Signed in
    const user = userCredential.user;
  }
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logout(email, password) {
    return auth.signOut();
  }
  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }
  function UpdateEmail(email) {
    return updateEmail(auth.currentUser, email);
  }
  function UpdatePassword(password) {
    return updatePassword(auth.currentUser, password);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    UpdateEmail,
    UpdatePassword,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
