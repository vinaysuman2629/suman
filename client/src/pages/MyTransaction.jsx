import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import UserCard from "../components/UserCard";
import { transContext } from "../context/transContext";

const MyTransaction = ({ token }) => {
  const { navigate } = useContext(transContext);
  const [list, setList] = useState([]);
  const [currentToken, setCurrentToken] = useState(
    token || localStorage.getItem("token")
  );
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
    <div className="min-h-screen mt-16 px-3 md:px-10 bg-gradient-to-tr from-white via-gray-100 to-gray-300">
      <UserCard />
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5">
        <button
          onClick={() => navigate("/contact")}
          className="w-full md:w-40 py-2 md:py-3 mt-4 bg-yellow-500 hover:bg-yellow-600 text-white text-sm md:text-base cursor-pointer"
        >
          Request Deposit
        </button>
        <button
          onClick={() => navigate("/contact")}
          className="w-full md:w-40 py-2 md:py-3 mt-4 bg-yellow-500 hover:bg-yellow-600 text-white text-sm md:text-base cursor-pointer"
        >
          Request Withdrawal
        </button>
      </div>

      <p className="my-5 text-[#00b4d8] text-xl md:text-3xl text-center font-bold">
        Your Transaction History
      </p>

      {/* Responsive Table */}
      <div className="overflow-x-auto pb-4">
        <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-[#00b4d8]/30 text-gray-700 text-xs md:text-sm font-medium">
              <th className="py-2 px-3 border">Description</th>
              <th className="py-2 px-3 border">Withdrawl</th>
              <th className="py-2 px-3 border">Deposit</th>
              <th className="py-2 px-3 border">Profit</th>
              <th className="py-2 px-3 border">Loss</th>
              <th className="py-2 px-3 border">Total</th>
              <th className="py-2 px-3 border">Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {!loading && list.length > 0 ? (
              list.map((item, index) => (
                <tr key={index} className="text-gray-700 text-xs md:text-sm border-b">
                  <td className="py-2 px-3 border">{item.description}</td>
                  <td className="py-2 px-3 border">{currency}{item.withdrawl}</td>
                  <td className="py-2 px-3 border">{currency}{item.deposit}</td>
                  <td className="py-2 px-3 border">{currency}{item.profit}</td>
                  <td className="py-2 px-3 border">{currency}{item.loss}</td>
                  <td className="py-2 px-3 border">{currency}{item.total}</td>
                  <td className="py-2 px-3 border text-[10px] md:text-sm">
                    {item.createdAt.split("T")[0]} <br />
                    {item.createdAt.split("T")[1].split(".")[0]}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-500">
                  {loading ? "Loading transactions..." : "No transactions found"}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTransaction;
