import transactionModel from "../models/transactionModel.js";
import userModel from "../models/userModel.js";

// function for add Transaction
const addTransaction = async (req, res) => {
  try {
    const { name, email, description, withdrawl, deposit, profit, loss } =
      req.body;

    const transactionData = {
      name,
      email,
      description,
      withdrawl: Number(withdrawl),
      deposit: Number(deposit),
      profit: Number(profit),
      loss: Number(loss),
      total:
        Number(deposit) + Number(profit) - Number(withdrawl) - Number(loss),
      date: Date.now(),
    };

    console.log(transactionData);

    const transaction = new transactionModel(transactionData);
    await transaction.save();

    res.json({ success: true, message: "Transaction Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// function for list Transaction
const listTransaction = async (req, res) => {
  try {
    const transactions = await transactionModel.find({});

    res.json({ success: true, transactions });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// function for list user Transaction
const listUserTransaction = async (req, res) => {
  try {
    const user = await userModel.find({ _id: req.body.userId });

    const transactions = await transactionModel.find({ email: user[0].email });

    res.json({ success: true, transactions });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// function for remove Transaction
const removeTransaction = async (req, res) => {
  try {
    await transactionModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Transaction Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// function for update transaction
const updateTransaction = async (req, res) => {
  try {
    const { id, name, email, description, withdrawl, deposit, profit, loss, total } =
      req.body;
    await transactionModel.findByIdAndUpdate(id, {
      name,
      email,
      description,
      withdrawl,
      deposit,
      profit,
      total:
        Number(deposit) + Number(profit) - Number(withdrawl) - Number(loss),
      loss,
    });

    // console.log( name, email, description, withdrawl, deposit, profit, loss)

    res.json({ success: true, message: "Transaction Updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export {
  addTransaction,
  listTransaction,
  listUserTransaction,
  removeTransaction,
  updateTransaction,
};