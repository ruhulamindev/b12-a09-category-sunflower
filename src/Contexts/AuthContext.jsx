import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../Utils/firebase";
import { toast } from "react-toastify";
import { GoogleAuthProvider } from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const signupUser = async (email, password, displayName, photoURL) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName, photoURL });
        setUser({ ...auth.currentUser });
      }
      toast.success("Signup successful!");
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  };

  const signinUser = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Signin successful!");
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  };

  const googleSignin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success("Google sign-in successful!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      toast.success("Signout successful!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const updateUserProfile = async (profile) => {
    try {
      await updateProfile(auth.currentUser, profile);
      setUser({ ...auth.currentUser, ...profile });
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent! Check your Gmail.");
      window.open("https://mail.google.com", "_blank");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
  <AuthContext.Provider
    value={{
      user,
      loading,
      signupUser,
      signinUser,
      googleSignin,
      logout,
      updateUserProfile,
      resetPassword,
    }}
  >
    {!loading && children}
  </AuthContext.Provider>
);
};

export default AuthContext;
