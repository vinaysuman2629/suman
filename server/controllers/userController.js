import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
import nodemailer from "nodemailer";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Route for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User doesn't exists" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Route for user register
const registerUser = async (req, res) => {
  try {
    const { name, phone, email, password } = req.body;

    // checking user already exists or not
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    // validating email format & strong password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    // hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      phone,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    const token = createToken(user._id);

    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Route for admin login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const userDetail = async (req, res) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
      return res.status(400).json({ success: false, message: 'Token is required' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const { password, ...userDetails } = user.toObject();
    res.json({ success: true, user: userDetails });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const forgetPassword = async (req, res) => {
  const { email } = req.body;

  try {
    if (!email) {
      return res.json({
        success: false,
        message: "Email is required",
      });
    }

    const user = await userModel.findOne({ email });

    if (user) {
      const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET, {
        expiresIn: "5m",
      });

      const link = `${process.env.VITE_FRONTEND_URL}/user/reset-password/${user._id}/${token}`;

      const transport = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Password Reset Request",
        html: `
        <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Your Password</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        .button {
            background-color:rgb(60, 255, 0);
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            display: inline-block;
            margin-top: 20px;
        }
        .footer {
            margin-top: 20px;
            font-size: 12px;
            color: #777;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Hello ${user.name},</h2>
        <p>We received a request to reset your password. Click the button below to proceed:</p>
        <a href="${link}" class="button">Reset Password</a>
        <p>If you did not request this, please ignore this email. This link will expire in 5 min for security reasons.</p>
        <p>If you have any issues, feel free to contact our support team.</p>
        <div class="footer">
            <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
        `,
      };
      transport.sendMail(mailOptions, (error, info) => {
        if (error) {
          return res.status(400).json({ success: false, message: "Error" });
        }
        return res.status(200).json({ success: true, message: "Email Sent" });
      });
    } else {
      return res.json({
        success: false,
        message: "Invalid Email",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const forgetPasswordEmail = async (req, res) => {
  const { newPassword, confirmPassword } = req.body;
  const { id, token } = req.params;

  try {
    if (newPassword && confirmPassword && id && token) {
      if (newPassword == confirmPassword) {
        const user = await userModel.findById(id);
        const isValid = await jwt.verify(token, process.env.JWT_SECRET);

        if (isValid) {
          // password hashing
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(newPassword, salt);

          const isSuccess = await userModel.findByIdAndUpdate(user._id, {
            $set: {
              password: hashedPassword,
            }
          })

          if (isSuccess) {
            return res.status(200).json({
              success: true,
              message: "Password changes successfully",
            });
          }
        } else {
          return res.status(400).json({
            success: false,
            message: "Link has been expired",
          });
        }
      } else {
        return res.status(400).json({
          success: false,
          message: "New Password and Confirm Password does not match",
        });
      }
    } else {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { loginUser, registerUser, adminLogin, userDetail, forgetPassword, forgetPasswordEmail, };
