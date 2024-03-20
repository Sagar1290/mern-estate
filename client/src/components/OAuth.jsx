import React, { useState } from "react";

import { app } from "../../firebase.config";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";

const OAuth = () => {
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
      console.log(data);
      if (data.success === false) {
        toast.error(`ERROR: ${data.message}`);
        return;
      }

      toast.success("User Login Successfull");
    } catch (error) {
      console.log(error);
      toast.error(`ERROR: ${error.message}`);
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
        {" "}
        Continue with google
      </button>
    </>
  );
};

export default OAuth;
