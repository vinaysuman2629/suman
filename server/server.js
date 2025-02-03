import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoute.js";
import transactionRouter from "./routes/transactionRoute.js";
import nodemailer from "nodemailer";

// App config
const app = express();
const port = process.env.PORT || 4000;
connectDB();

// middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/transaction", transactionRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

// Email Sending Route
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // Use .env for security
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: email, // Branded sender
      to: process.env.EMAIL, // Send to the user
      subject: "New Contact Form Submission",
      html: `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
  `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.response); // Debugging

    res.status(200).json({ success: true, message: "Email Sent Successfully" });
  } catch (error) {
    console.error("Email sending error:", error);
    res
      .status(500)
      .json({
        success: false,
        message: "Internal Server Error",
        error: error.message,
      });
  }
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
