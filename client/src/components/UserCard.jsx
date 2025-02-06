import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const UserCard = ({ token }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [currentToken, setCurrentToken] = useState(token || localStorage.getItem("token"));

    useEffect(() => {
        setCurrentToken(token || localStorage.getItem("token"));
    }, [token]);

    const fetchUserDetails = async () => {
        setLoading(true);
        try {
            if (!currentToken) return;

            const response = await axios.get(
                `${backendUrl}/api/user/userDetail`, {
                headers: {
                    Authorization: `Bearer ${currentToken}`, // Assuming token is passed in x-auth-token header
                },
            }
            );

            if (response.data.success) {
                setUser(response.data.user);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserDetails();
    }, [currentToken]);

    return (
        <div className="mt-16 px-5 md:px-10">
            {loading ? (
                <div className="flex justify-center items-center py-6">
                    <div className="bg-white shadow-lg rounded-lg w-full max-w-xl p-6">
                        <div className="text-center">
                            {/* Skeleton for the user's name */}
                            <div className="h-6 w-48 bg-gray-300 rounded-lg mx-auto mb-2 animate-pulse"></div>
                            {/* Skeleton for the user's email */}
                            <div className="h-4 w-64 bg-gray-300 rounded-lg mx-auto mb-4 animate-pulse"></div>
                        </div>
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Skeleton for phone section */}
                            <div className="flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
                                <div className="h-5 w-24 bg-gray-300 rounded-lg mb-2 animate-pulse"></div>
                                <div className="h-4 w-36 bg-gray-300 rounded-lg animate-pulse"></div>
                            </div>
                            {/* Skeleton for joined section */}
                            <div className="flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
                                <div className="h-5 w-24 bg-gray-300 rounded-lg mb-2 animate-pulse"></div>
                                <div className="h-4 w-36 bg-gray-300 rounded-lg animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>

            ) : user ? (
                <div className="flex justify-center items-center py-6">
                    <div className="bg-white shadow-lg rounded-lg w-full max-w-xl p-6">
                        <div className="text-center">
                            <h1 className="text-2xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text">{user.name}</h1>
                            <p className="text-xs text-gray-600 md:text-lg">{user.email}</p>
                        </div>
                        <div className="mt-6 grid grid-cols-2 gap-4">
                            <div className="flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
                                <h2 className="text-sm md:text-lg font-medium text-gray-700">Phone</h2>
                                <p className="text-xs md:text-base text-gray-600">{user.phone || "Not provided"}</p>
                            </div>
                            <div className="flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
                                <h2 className="text-sm md:text-lg font-medium text-gray-700">Joined</h2>
                                <p className="text-xs md:text-base text-gray-600">{new Date(user.createdAt).toLocaleDateString()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center text-xl text-gray-700">
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-pulse space-y-4">
                            <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto"></div>
                            <div className="h-6 bg-gray-300 rounded w-1/2 mx-auto"></div>
                            <div className="h-6 bg-gray-300 rounded w-1/4 mx-auto"></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserCard;
