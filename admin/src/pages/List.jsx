import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { Trash2 } from 'lucide-react'

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/transaction/list");
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
  const removeTransaction = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/transaction/remove",
        { id },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <>
      <p className="mb-2">All Transactions List</p>
      <div className="flex flex-col gap-2">
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr_1fr] items-center py-1 px-2 border border-gray-300 bg-gray-100 text-sm">
          <b>Name</b>
          <b>Email</b>
          <b>Amount</b>
          <b>Profit</b>
          <b>Total</b>
          <b>Date and Time</b>
          <b className="text-center">Delete</b>
        </div>

        {list.map((item, index) => (
          <div
            className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border border-gray-300 text-sm"
            key={index}
          >
            <p><span className="md:hidden">Name : </span>{item.name}</p>
            <p><span className="md:hidden">Email : </span>{item.email}</p>
            <p>
              <span className="md:hidden">Amount : </span>
              {currency}
              {item.amount}
            </p>
            <p>
              <span className="md:hidden">Profit : </span>
              {currency}
              {item.profit}
            </p>
            <p>
              <span className="md:hidden">Total : </span>
              {currency}
              {item.total}
            </p>
            <p><span className="md:hidden">Date & Time : </span>{item.createdAt.split("T")[0]} & {item.createdAt.split("T")[1].split(".")[0]}</p>
            <p
              onClick={() => removeTransaction(item._id)}
              className="flex justify-end md:justify-center cursor-pointer text-lg"
            >
              <Trash2 size={24} />
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
