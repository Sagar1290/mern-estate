import React, { useState } from "react";

import { app } from "../../firebase.config";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";

import {
  signInSuccess,
  signInStart,
  signInFailure,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, userData, error } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setFormData({ email: user.email, fullname: user.displayName });

      const response = await fetch("/api/auth/google", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success === false) {
        alert(`ERROR: ${data.message}`);
        dispatch(signInFailure(data.message));
        return;
      }

      alert("User Login Successfull");
      dispatch(signInSuccess(data.userData));
      // console.log(data);
    } catch (error) {
      console.log(error);
      dispatch(signInFailure(error));
      alert(`ERROR: ${error.message}`);
    }
  };

  return (
    <>
      <ToastContainer />
      <button
        className="w-full bg-red-500 text-white text-md sm:text-lg font-semibold rounded-md px-4 py-3"
        onClick={handleGoogleLogin}
        type="button"
      >
        Continue with google
      </button>
    </>
  );
};

export default OAuth;
