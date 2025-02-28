import express from "express";
import {
  loginUser,
  registerUser,
  adminLogin,
  userDetail,
  forgetPassword,
  forgetPasswordEmail,
} from "../controllers/userController.js";
import authUser from '../middleware/authUser.js';

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);
userRouter.get("/userDetail", authUser, userDetail);
userRouter.post("/forget-password", forgetPassword);
userRouter.post("/forget-password/:id/:token", forgetPasswordEmail);

export default userRouter;
