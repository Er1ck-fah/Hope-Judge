import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET_ACCESS_TOKEN } from "../libs/config.js";

const UserSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: "Your firstname is required",
    },
    last_name: {
      type: String,
      required: "Your lastname is required",
    },
    pseudo: {
      type: String,
      max: 50,
    },
    email: {
      type: String,
      required: "Your email is required",
      unique: true,
      lowercase: true,
      trim: true,
    },
    photo: {
      type: String,
      max: 100,
    },
    telephone: {
      type: String,
      max: 100,
    },
    password: {
      type: String,
      required: "Your password is required",
      max: 50,
    },
    group_user: {
      type: String,
      enum: ["admin", "federation", "judge", "member"],
      default: "member",
    },
    role: {
      type: String,
      required: true,
      default: "0x01",
    },
    is_enable: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) return next();
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.generateAccessJWT = function () {
  let payload = {
    id: this._id,
  };
  return jwt.sign(payload, SECRET_ACCESS_TOKEN, {
    expiresIn: "20m",
  });
};

export default mongoose.model("Users", UserSchema);
