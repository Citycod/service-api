import User from "../models/user.model.js";
import { createError } from "../middlewares/globalErrHandler.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendRegisterNotificationEmail } from "../services/emailService.js";

export const register = async (req, res, next) => {
  try {
    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ email: req.body.email }, { username: req.body.username }],
    });

    if (existingUser) {
      return next(createError(400, "User already exists!"));
    }

    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    // create notification
    const notification = await Notification.create({
      userId: user._id,
      message: `<p>
      Welcome to <strong>JoyDom</strong> – your trusted platform for professional artisan!
    </p>`,
    });
    if (user && user.email) {
      await sendRegisterNotificationEmail(user.email, user.username);
    }

    await newUser.save();
    res.status(201).send("User registered successfully...");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) return next(createError(404, "User not found!"));

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
        isAdmin: user.isAdmin,
        isSuperAdmin: user.isAdmin, // For now, all admins are super admins
      },
      process.env.JWT_KEY
    );

    const { password, ...info } = user._doc;
    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .send(info);
  } catch (err) {
    next(err);
  }
};

export const logout = async (req, res) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("User has been logged out.");
};
