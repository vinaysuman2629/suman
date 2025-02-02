import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { transContext } from "../context/transContext";
import { Loader2 } from "lucide-react"; 

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const { token, setToken, navigate, backendUrl } = useContext(transContext);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false); // Loading state for the button

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        setLoading(true); // Set loading to true when the form is submitted

        try {
            const url = isLogin ? "/api/user/login" : "/api/user/register";
            const payload = isLogin ? { email, password } : { name, phone, email, password };

            const response = await axios.post(backendUrl + url, payload);

            if (response.data.success) {
                toast.success(isLogin ? "Logged In" : "Registered Successfully");
                setToken(response.data.token);
                localStorage.setItem("token", response.data.token);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        } finally {
            setLoading(false); // Reset loading state after API call
        }
    };

    const ToggleForm = () => setIsLogin((prev) => !prev);

    useEffect(() => {
        if (token) navigate("/");
    }, [token, navigate]);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
                    {isLogin ? "Login" : "Register"}
                </h1>
                <form onSubmit={onSubmitHandler}>
                    {!isLogin && (
                        <div className="mb-4">
                            <label className="block font-medium text-gray-700">Full Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>
                    )}
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
                    {!isLogin && (
                        <div className="mb-4">
                            <label className="block font-medium text-gray-700">Phone Number</label>
                            <input
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>
                    )}
                    <div className="mb-4">
                        <label className="block font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition"
                        disabled={loading} // Disable the button when loading
                    >
                        {loading ? (
                            <div className="flex justify-center items-center">
                                <Loader2 className="animate-spin text-white" size={24} />
                            </div>
                        ) : (
                            isLogin ? "Login" : "Register"
                        )}
                    </button>
                </form>
                <p className="text-center mt-4 text-sm">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                    <button
                        onClick={ToggleForm}
                        className="text-yellow-600 font-bold ml-1"
                    >
                        {isLogin ? "Register Here" : "Login Here"}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Auth;
