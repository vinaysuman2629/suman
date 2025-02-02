import axios from "axios";
import React, { useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react"; // Importing the loader component for spinner

const Add = ({ token }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [profit, setProfit] = useState("");
  const [loading, setLoading] = useState(false); // State to track the loading status

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submitting

    try {
      const formData = {
        name,
        email,
        amount: Number(amount),
        profit: Number(profit),
      };

      const response = await axios.post(
        backendUrl + "/api/transaction/add",
        formData,
        {
          headers: {
            token,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setEmail("");
        setAmount("");
        setProfit("");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false); // Reset loading after the API call
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full h-[85vh] overflow-scroll items-start gap-3"
    >
      <div className="w-full">
        <div className="w-full">
          <p className="mb-2">Name</p>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="w-full px-3 py-2"
            type="text"
            placeholder="Type here"
            required
          />
        </div>
        <div className="w-full">
          <p className="mb-2">Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full px-3 py-2"
            type="text"
            placeholder="Type here"
            required
          />
        </div>
        <div className="w-full">
          <p className="mb-2">Amount</p>
          <input
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            className="w-full px-3 py-2"
            type="Number"
            placeholder="100"
            required
          />
        </div>
        <div className="w-full">
          <p className="mb-2">Profit</p>
          <input
            onChange={(e) => setProfit(e.target.value)}
            value={profit}
            className="w-full px-3 py-2"
            type="Number"
            placeholder="25"
            required
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-end">
        <button
          type="submit"
          className="w-28 py-3 mt-4 bg-yellow-500 hover:bg-yellow-600 text-white"
          disabled={loading} // Disable button when loading
        >
          {loading ? (
            <div className="flex justify-center items-center">
              <Loader2 className="animate-spin text-white" size={24} />
            </div>
          ) : (
            "ADD"
          )}
        </button>
      </div>
    </form>
  );
};

export default Add;
