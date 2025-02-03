import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { backendUrl } from "../App";
import { Loader2 } from "lucide-react"; // Importing the loader icon

const ChangePassword = () => {
  const { id, token } = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false); // State for loader

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    try {
      const response = await axios.post(
        backendUrl + `/api/user/forget-password/${id}/${token}`,
        input
      );

      if (response.data.success) {
        toast.success("Password Changed Successfully");
        navigate("/login");
      } else {
        toast.error(response.data.message || "Failed to reset password");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Reset Password
        </h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-4">
            <label className="block font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              name="newPassword"
              value={input.newPassword}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your new password"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={input.confirmPassword}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your confirm password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition flex items-center justify-center"
            disabled={isLoading} // Disable button when loading
          >
            {isLoading ? (
              <Loader2 className="animate-spin text-white" size={20} />
            ) : (
              "Change Password"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
