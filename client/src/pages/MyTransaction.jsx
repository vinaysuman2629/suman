import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";

const MyTransaction = ({ token }) => {
  const [list, setList] = useState([]);
  const [currentToken, setCurrentToken] = useState(token || localStorage.getItem("token"));

  useEffect(() => {
    setCurrentToken(token || localStorage.getItem("token"));
  }, [token]);

  const fetchList = async () => {
    try {
      if (!currentToken) return;

      const response = await axios.get(`${backendUrl}/api/transaction/list-user-transaction`, {
        headers: { Authorization: `Bearer ${currentToken}` },
      });

      if (response.data.success) {
        setList(response.data.transactions.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    setList([]);
    fetchList();
  }, [currentToken]);

  return (
    <div className="mt-16 min-h-screen p-4">
      <h2 className="text-xl font-bold text-[#b6c307] text-center mb-4">All Transactions</h2>

      <div className="w-full overflow-x-auto">
        {/* Table Header */}
        <div className="hidden md:grid grid-cols-5 bg-[#00b4d8] text-white font-semibold py-3 px-4 rounded-t-lg text-sm md:text-base shadow-md">
          <b>Amount</b>
          <b>Profit</b>
          <b>Total</b>
          <b>Date</b>
          <b>Time</b>
        </div>

        {/* Transaction List */}
        <div className="flex flex-col divide-y border border-gray-300 shadow-md rounded-lg">
          {list.length > 0 ? (
            list.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-2 md:grid-cols-5 items-center gap-4 py-3 px-4 bg-white border-b hover:bg-gray-200 transition duration-200 text-sm md:text-base"
              >
                {/* Mobile-Friendly Labels */}
                <div className="md:hidden font-semibold text-[#b6c307]">Amount:</div>
                <p className="text-gray-800 font-semibold">{currency}{item.amount}</p>

                <div className="md:hidden font-semibold text-[#b6c307]">Profit:</div>
                <p className="text-[#00b4d8]">{currency}{item.profit}</p>

                <div className="md:hidden font-semibold text-[#b6c307]">Total:</div>
                <p className="text-amber-500 font-semibold">{currency}{item.total}</p>

                <div className="md:hidden font-semibold text-[#b6c307]">Date:</div>
                <p className="text-gray-700">{item.createdAt.split("T")[0]}</p>

                <div className="md:hidden font-semibold text-[#b6c307]">Time:</div>
                <p className="text-gray-700">{item.createdAt.split("T")[1].split(".")[0]}</p>
              </div>
            ))
          ) : (
            <p className="py-4 text-center text-gray-500">No transactions found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyTransaction;
