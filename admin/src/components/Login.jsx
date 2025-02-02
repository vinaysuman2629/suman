import axios from 'axios';
import React, { useState } from 'react';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';
import { Loader2 } from "lucide-react"; // Importing Loader2 for the spinner

const Login = ({ setToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); // State to manage the loading state for the button

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when submitting the form

        try {
            const response = await axios.post(backendUrl + '/api/user/admin', { email, password });
            if (response.data.success) {
                setToken(response.data.token);
                toast.success("Logged In");
                window.location.href = "/list"; // Redirect to the list page after successful login
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        } finally {
            setLoading(false); // Reset loading state after the API call
        }
    };

    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100'>
            <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
                <h1 className='text-2xl font-bold text-center text-blue-600 mb-6'>
                    Admin Panel
                </h1>
                <form onSubmit={onSubmitHandler}>
                    <div className='mb-4'>
                        <label className='block font-medium text-gray-700'>Email</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500'
                            type="email"
                            placeholder='your@email.com'
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block font-medium text-gray-700'>Password</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className='w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500'
                            type="password"
                            placeholder='Enter your password'
                            required
                        />
                    </div>
                    <button
                        className='w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition'
                        type="submit"
                        disabled={loading} // Disable the button when loading
                    >
                        {loading ? (
                            <div className="flex justify-center items-center">
                                <Loader2 className="animate-spin text-white" size={24} />
                            </div>
                        ) : (
                            "Login"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
