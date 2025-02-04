import express from "express";
import {
  addTransaction,
  listTransaction,
  listUserTransaction,
  removeTransaction,
  updateTransaction,
} from "../controllers/transactionController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/authUser.js";

const transactionRouter = express.Router();

transactionRouter.post("/add", adminAuth, addTransaction);
transactionRouter.post("/remove", adminAuth, removeTransaction);
transactionRouter.post("/update", adminAuth, updateTransaction);
transactionRouter.get("/list", listTransaction);
transactionRouter.get("/list-user-transaction", authUser, listUserTransaction);

export default transactionRouter;
