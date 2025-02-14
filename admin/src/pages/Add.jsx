import axios from "axios";
import React, { useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";

const Add = ({ token }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    withdrawl: "",
    deposit: "",
    profit: "",
    loss: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const formattedData = {
        ...formData,
        withdrawl: Number(formData.withdrawl),
        deposit: Number(formData.deposit),
        profit: Number(formData.profit),
        loss: Number(formData.loss),
      };
      
      const response = await axios.post(
        `${backendUrl}/api/transaction/add`,
        formattedData,
        {
          headers: {
            token,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setFormData({ name: "", email: "", description: "", withdrawl: "", deposit: "", profit: "", loss: "" });
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

  return (
    <form onSubmit={onSubmitHandler} className="w-full h-[85vh] overflow-scroll p-4">
      <table className="w-full border-collapse border border-gray-300">
        <tbody>
          {[
            { label: "Name", name: "name", type: "text" },
            { label: "Email", name: "email", type: "text" },
            { label: "Description", name: "description", type: "text" },
            { label: "Withdrawl", name: "withdrawl", type: "number" },
            { label: "Deposit", name: "deposit", type: "number" },
            { label: "Profit", name: "profit", type: "number" },
            { label: "Loss", name: "loss", type: "number" },
          ].map(({ label, name, type }) => (
            <tr key={name} className="border border-gray-300">
              <td className="p-2 font-medium text-gray-700 border border-gray-300">{label}</td>
              <td className="p-2 border border-gray-300">
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  placeholder={`Enter ${label.toLowerCase()}`}
                  required
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-full flex justify-end mt-4">
        <button
          type="submit"
          className="w-28 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded"
          disabled={loading}
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
