import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    description: { type: String, required: true },
    withdrawl: { type: Number, required: true, default: 0 },
    deposit: { type: Number, required: true },
    profit: { type: Number, required: true, default: 0 },
    loss: { type: Number, required: true, default: 0 },
    total: { type: Number, required: true },
    date: { type: Number, required: true },
  },
  { timestamps: true }
);

const transactionModel =
  mongoose.models.transaction ||
  mongoose.model("transaction", transactionSchema);

export default transactionModel;
