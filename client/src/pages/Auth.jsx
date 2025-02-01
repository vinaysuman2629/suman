import { useState } from "react";

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
                    {isLogin ? "Login" : "Register"}
                </h1>
                <form>
                    {!isLogin && (
                        <div className="mb-4">
                            <label className="block font-medium text-gray-700">Full Name</label>
                            <input type="text" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your full name" required />
                        </div>
                    )}
                    <div className="mb-4">
                        <label className="block font-medium text-gray-700">Email</label>
                        <input type="email" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" required />
                    </div>
                    {!isLogin && (
                        <div className="mb-4">
                            <label className="block font-medium text-gray-700">Phone Number</label>
                            <input type="text" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your phone number" required />
                        </div>
                    )}
                    <div className="mb-4">
                        <label className="block font-medium text-gray-700">Password</label>
                        <input type="password" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password" required />
                    </div>
                    <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition" >
                        {isLogin ? "Login" : "Register"}
                    </button>
                </form>
                <p className="text-center mt-4 text-sm">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                    <button className="text-yellow-600 font-bold ml-1" onClick={toggleForm} >
                        {isLogin ? "Register Here" : "Login Here"}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Auth;
