import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { Trash2, Loader2, Pencil } from "lucide-react";

const List = ({ token }) => {
  const [list, setList] = useState([]);
  const [loadingId, setLoadingId] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    withdrawl: "",
    deposit: "",
    profit: "",
    loss: "",
  });

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
    setLoadingId(id);
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
    } finally {
      setLoadingId(null);
    }
  };

  const openUpdatePopup = (transaction) => {
    setSelectedTransaction(transaction);
    setFormData(transaction);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedTransaction(null);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedFormData = {
        id: selectedTransaction._id,
        name: formData.name,
        email: formData.email,
        description: formData.description,
        withdrawl: Number(formData.withdrawl),
        deposit: Number(formData.deposit),
        profit: Number(formData.profit),
        loss: Number(formData.loss),
      };

      const response = await axios.post(
        backendUrl + "/api/transaction/update",
        updatedFormData,
        {
          headers: {
            token,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList()
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
    closePopup();
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className="mb-4 text-lg font-semibold">All Transactions</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 p-4 rounded-lg shadow-md bg-white flex flex-col gap-2"
          >
            <p className="font-semibold text-lg">{item.name}</p>
            <p className="text-gray-600 text-xs md:text-sm">{item.email}</p>
            <p className="text-sm">
              <span className="font-semibold">Description:</span> {item.description}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Withdrawal:</span> {currency}{item.withdrawl}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Deposit:</span> {currency}{item.deposit}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Profit:</span> {currency}{item.profit}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Loss:</span> {currency}{item.loss}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Total:</span> {currency}{item.total}
            </p>
            <div className="mt-2 flex gap-2">
              <button
                onClick={() => removeTransaction(item._id)}
                className="flex items-center justify-center bg-red-500 text-white px-3 py-1.5 rounded hover:bg-red-600 transition"
              >
                {loadingId === item._id ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <Trash2 size={20} />
                )}
              </button>
              <button
                onClick={() => openUpdatePopup(item)}
                className="flex items-center justify-center bg-blue-500 text-white px-3 py-1.5 rounded hover:bg-blue-600 transition"
              >
                <Pencil size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {isPopupOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-50"
          onClick={closePopup}
        >
          <div
            className="bg-white p-6 rounded shadow-lg w-96"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <h2 className="text-lg font-semibold mb-4">Update Transaction</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="border p-2 rounded" />
              <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="border p-2 rounded" />
              <input name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="border p-2 rounded" />
              <input name="withdrawl" value={formData.withdrawl} onChange={handleChange} placeholder="Withdrawl" className="border p-2 rounded" />
              <input name="deposit" value={formData.deposit} onChange={handleChange} placeholder="Deposit" className="border p-2 rounded" />
              <input name="profit" value={formData.profit} onChange={handleChange} placeholder="Profit" className="border p-2 rounded" />
              <input name="loss" value={formData.loss} onChange={handleChange} placeholder="Loss" className="border p-2 rounded" />
              <div className="flex gap-2 mt-2">
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Update</button>
                <button type="button" onClick={closePopup} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default List;