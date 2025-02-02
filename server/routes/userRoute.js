import express from "express";
import {
  loginUser,
  registerUser,
  adminLogin,
  userDetail,
} from "../controllers/userController.js";
import authUser from '../middleware/authUser.js';

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);
userRouter.get("/userDetail",authUser , userDetail);

export default userRouter;
