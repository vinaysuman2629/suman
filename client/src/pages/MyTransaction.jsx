import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";

const MyTransaction = ({ token }) => {
  const [list, setList] = useState([]);
  const [currentToken, setCurrentToken] = useState(token || localStorage.getItem("token"));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCurrentToken(token || localStorage.getItem("token"));
  }, [token]);

  const fetchList = async () => {
    setLoading(true);
    try {
      if (!currentToken) return;

      const response = await axios.get(
        `${backendUrl}/api/transaction/list-user-transaction`,
        {
          headers: {
            Authorization: `Bearer ${currentToken}`,
          },
        }
      );

      if (response.data.success) {
        setList(response.data.transactions.reverse());
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
    setList([]);
    fetchList();
  }, [currentToken]);

  return (
    <div className="min-h-screen mt-16 px-5 md:px-10 bg-gradient-to-tr from-white via-gray-100 to-gray-300">
      <p className="mb-4 text-[#00b4d8] text-3xl text-center font-bold">Your Transaction History</p>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] items-center py-1 px-5 border bg-[#00b4d8]/30 text-gray-700 rounded-full text-xs md:text-base font-medium">
          <b>Amount</b>
          <b>Profit</b>
          <b>Total</b>
          <b>Date</b>
          <b>Time</b>
        </div>

        {loading &&
          Array.from({ length: 10 }).map((_, index) => (
            <div className="block" key={index}>
              <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] items-center gap-4 py-1 md:p-2 px-5 border border-gray-300 rounded-full text-xl animate-pulse">
                <div className="h-[8px] md:h-4 bg-gray-300 rounded col-span-1"></div>
                <div className="h-[8px] md:h-4 bg-gray-300 rounded col-span-1"></div>
                <div className="h-[8px] md:h-4 bg-gray-300 rounded col-span-1"></div>
                <div className="h-[8px] md:h-4 bg-gray-300 rounded col-span-1"></div>
                <div className="h-[8px] md:h-4 bg-gray-300 rounded col-span-1"></div>
              </div>
            </div>
          ))}

        {!loading &&
          list.map((item, index) => (
            <div key={index} className="block">
              <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] items-center gap-4 py-1 px-5 rounded-full border border-gray-300 text-[8px] md:text-sm">
                <p className="text-gray-700">{currency}{item.amount}</p>
                <p className="text-gray-700">{currency}{item.profit}</p>
                <p className="text-gray-700">{currency}{item.total}</p>
                <p className="text-gray-700">{item.createdAt.split("T")[0]}</p>
                <p className="text-gray-700">{item.createdAt.split("T")[1].split(".")[0]}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyTransaction;
