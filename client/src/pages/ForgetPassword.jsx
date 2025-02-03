import axios from "axios";
import React, { useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Sending email...");
    try {
      setEmailSent(true);
      const response = await axios.post(`${backendUrl}/api/user/forget-password`, { email });

      if (response.data.success) {
        toast.update(toastId, {
          render: "Email Sent Successfully!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      toast.update(toastId, {
        render: "Failed to send email",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
      setEmailSent(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Forget Password
        </h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-4">
            <label className="block font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full text-white font-bold py-2 px-4 rounded-lg transition ${
              emailSent
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-yellow-500 hover:bg-yellow-600"
            }`}
            disabled={emailSent}
          >
            {emailSent ? "Email Sent" : "Send Mail"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
