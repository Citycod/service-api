import express from "express";
import dotenv from "dotenv";

import authRoute from "../routes/auth.route.js";
import userRoute from "../routes/user.route.js";
import gigRoute from "../routes/gig.route.js";
import orderRoute from "../routes/order.route.js";
import conversationRoute from "../routes/conversation.route.js";
import messageRoute from "../routes/message.route.js";
import reviewRoute from "../routes/review.route.js";
import adminRoute from "../routes/admin.route.js";

import cors from "cors";
import cookieParser from "cookie-parser";

import dbConnect from "../config/dbConnect.js";
import { globalErrhandler, notFound } from "../middlewares/globalErrHandler.js";

dotenv.config();
//db connect
dbConnect();
const app = express();

//cors configuration
const corsOptions = {
  origin: "https://service-two-sand.vercel.app/",
  credentials: true, // Allow cookies to be sent
};

// pass incoming data
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// custom routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);
app.use("/api/admin", adminRoute);

// error handler and not found middleware
app.use(notFound);
app.use(globalErrhandler);

export default app;
