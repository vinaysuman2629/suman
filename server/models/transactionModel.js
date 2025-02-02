import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  amount: { type: Number, required: true },
  profit: { type: Number, required: true },
  total: { type: Number, required: true },
  date: { type: Number, required: true },
},
{ timestamps: true });

const transactionModel = mongoose.models.transaction || mongoose.model("transaction", transactionSchema)

export default transactionModel